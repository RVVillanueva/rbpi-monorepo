// otp-rpc.tsx
// 
// Used for authenticating legacy users into the rbpicore platform using their *.rbpi@gmail.com. 
// It is hardcoded in this source file, so when things get updated, this source file needs to be 
// rebuild with the platform.

import { OpenAPIHono } from "@hono/zod-openapi";
import { getEmployeeById, getEmployeeByUsername } from "~/platform-legacy/functions/internal";

import { StatusCodes } from "http-status-codes";
import { isNotFound } from "~/db/errors";
import { createMailerClient } from "~/platform-legacy/helpers/mailer";

import { users } from "@schema/users";
import { uneval } from "devalue";
import { eq } from "drizzle-orm";
import { setSignedCookie } from "hono/cookie";
import { render } from 'react-email';
import {
  addLegacyUserToOrganization,
  getRbpiOrganization,
} from "~/platform-core/functions/internal";
import { createNumericId, createUniqueId } from "~/platform-core/helpers/struct";
import { getBase64FileMeta, getRandomIntWebCrypto } from "~/platform-legacy/helpers/utils";
import { generateOtpRoute, validateOtpRoute } from "./specs/otp";

const otpRpc = new OpenAPIHono<HonoCloudflare>()

  // An RPC used for generating an OTP for the user attempting to login RBPICore
  .openapi(generateOtpRoute, async ctx => {
    const req = ctx.req.valid('json')
    const db = ctx.get('db')
    const employee = await getEmployeeByUsername(db.legacy, req.username.trim())
    const mailer = await createMailerClient(ctx.env)
    const t = ctx.get('locale')

    if (employee.isErr()) {
      if (isNotFound(employee.error)) {
        return ctx.json({}, StatusCodes.NOT_FOUND)
      }

      return ctx.json({}, StatusCodes.INTERNAL_SERVER_ERROR)
    }

    const fullName = employee.value.fullName
    const email = `${employee.value.username.trim()}.rbpi@gmail.com`.toLowerCase()
    const code = getRandomIntWebCrypto(100000, 999999)
    const props = { fullName, email, code }

    let sent = false
    let OneTimePassword = (await import('~/emails/internal/en/one-time-password')).default

    const res = await mailer.sendEmail({
      to: email,
      subject: t('emails.otp.subject_line', 'Your RBPICore One-time Password (OTP)'),
      html: await render(<OneTimePassword {...props} />),
    })

    sent = res?.isOk() ?? false

    // Store the OTP into the KV namespace and make the OTP code
    // valid for 5 minutes only.
    if (sent) {
      await Promise.all([
        ctx.env.KV.put(`${ employee.value.id }_otpCode`, code.toString(), { expirationTtl: 60 * 5 }),
        ctx.env.KV.put(`${ employee.value.id }_data`, uneval(employee.value), { expirationTtl: 60 * 5 }),
      ])
    } else if (res?.isErr()) {
      console.error(res.error)
    }

    return ctx.json(
      {
        id: employee.value.id, 
        email,
        sent,
      },
      sent ? StatusCodes.OK : StatusCodes.SERVICE_UNAVAILABLE,
    )
  })
  
  // Used for validating an OTP and is also used to create session for that
  // particular user accessing RBPIcore.
  .openapi(validateOtpRoute, async ctx => {
    const req = ctx.req.valid('json')
    const auth = ctx.get('auth')
    const db = ctx.get('db')
    const actual = await ctx.env.KV.get(`${ req.id }_otpCode`) // req.id is basically the employee id.

    // @TODO: Provide a reliable bypass for the OTP code for special cases

    // Matched? Create an account for the internal user and login.
    if (actual && (req.input === Number(actual) || req.input === /** FUCKING BAD */ Number(ctx.env.BYPASS_OTP))) {
      const employee = await getEmployeeById(db.legacy, req.id)
      const json = await ctx.env.KV.get(`${ req.id }_data`)
      const data = eval(`(${json ?? 'null'})`) as RBPICore.Legacy.HREmployeesView | null

      if (employee.isErr()) {
        return ctx.json({}, StatusCodes.FAILED_DEPENDENCY)
      }

      // Return an error when the data has now been purge by KV.
      if (!data) {
        return ctx.json({}, StatusCodes.TOO_MANY_REQUESTS)
      }

      const username = data.username
      const email = `${ data.username }.rbpi@gmail.com`.toLowerCase()

      // Check if user already exists in the database
      const [existing] = await db.core.select()
        .from(users)
        .where(eq(users.username, username))
        .limit(1)
      
      // Bypass Better-Auth login mechanism
      const handleLogin = async (userId: string) => {
        const authCtx = await auth.$context

        const session = await authCtx.internalAdapter.createSession(userId)
        const cookieConfig = authCtx.authCookies.sessionToken
        const { name, attributes } = cookieConfig
        const { token } = session

        await setSignedCookie(ctx, name, token, authCtx.secret, attributes)

        return ctx.json({}, StatusCodes.OK)
      }

      if (existing) {
        return handleLogin(existing.id)
      }

      // Add the created user into the RBPI organization
      const org = await getRbpiOrganization(db.core)

      if (org.isErr()) {
        return ctx.json({}, StatusCodes.FAILED_DEPENDENCY)
      }

      const numericId = createNumericId()

      // @CRITICAL
      //
      // Upload the avatar image into r2 media bucket. Take note,
      // the image from the legacy DB is encoded as a base64 string stored
      // into the database, we don't actually have an idea what format
      // the image is using, so I am assuming it's a PNG file.
      //
      const encoded = employee.value.avatar.toString('utf8')
      const { contentType, ext } = getBase64FileMeta(encoded)
      const buf = Uint8Array.from(atob(encoded), c => c.charCodeAt(0))
      const bucketPath = `users/${numericId}/avatar.${ext}`
    
      await ctx.env.MEDIA_BUCKET.put(bucketPath, buf, {
        httpMetadata: {
          contentType,
        },
      })

      const [user] = await db.core
        .insert(users)
        .values({
          id: createUniqueId(),
          numericId,
          role: 'user',
          email: email,
          emailVerified: true,
          image: `/media/${bucketPath}`,
          defaultOrganizationId: org.value.id,
          username: username,
          name: data.fullName,
          isAnonymous: false,
          banned: false,
          banExpires: null,
          banReason: null,
          state: {
            interfaceStates: {
              isCollapsedSidebar: false,
              isVisiblePanelView: true,

              railsWidth: 42,
              sidebarWidth: 172,
              panelWidth: 240,

              windowStates: {
                activeWindowId: null,
                windows: [],
              },
            },
          } satisfies RBPICore.UserStateConfig,
        })
        .returning()

      // Create member record for the user
      await addLegacyUserToOrganization(db.core, user.id, org.value.id)

      return handleLogin(user.id)
    } else if (actual && req.input) {
      
    }

    return ctx.json({}, StatusCodes.FORBIDDEN)
  })

export { otpRpc };
