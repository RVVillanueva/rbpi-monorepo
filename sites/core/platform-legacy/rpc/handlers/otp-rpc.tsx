import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { getEmployeeByUsername } from "~/platform-legacy/functions/internal";

import { StatusCodes } from "http-status-codes"
import { isNotFound } from "~/db/errors";
import { createMailerClient } from "~/platform-legacy/helpers/mailer";

import { render } from 'react-email'
import { getRandomIntWebCrypto } from "~/platform-legacy/helpers/utils";
import { getCookie, setCookie } from "hono/cookie";
import { JSX } from "react";
import { uneval } from "devalue";
import { internalUsers, users } from "@schema/users";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { createUniqueId } from "~/platform-core/helpers/struct";

const generateOtpRoute = createRoute({
  method: 'post',
  path: '/otp/generate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              username: z
                .string()
                .regex(/^[A-Z]{3}.+$/, 'Invalid username')
                .min(8, 'Invalid username')
                .min(1),
            }),
        },
      },
    },
  },

  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            id: z.number(),
            email: z.email(),
            sent: z.boolean(),
          }),
        },
      },
      description: 'Respond the state of the OTP and whether it was sent or not.',
    },

    404: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: 'User not found',
    },

    503: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: 'Service unavailable',
    },

    500: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: 'Internal server error',
    },
  },

})

const validateOtpRoute = createRoute({
  method: 'post',
  path: '/otp/validate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({
            id: z.number(),
            input: z.number().min(100000).max(999999),
          }),
        },
      },
    },
  },

  responses: {
    200: {
      content: {
        'application/json': {
          schema: z
            .object({
              
            })
            .openapi('ValidateOTPResponse#Success'),
        },
      },
      description: 'Validates the OTP sent by the actor',
    },

    403: {
      content: {
        'application/json': {
          schema: z
            .object({

            })
            .openapi('ValidateOTPResponse#Forbidden'),
        },
      },
      description: 'Mismatch',
    },

    429: {
      content: {
        'application/json': {
          schema: z
            .object({

            })
            .openapi('ValidateOTPResponse#TooManyRequest'),
        },
      },
      description: 'Actor attempted too many validations',
    },
  },
})

const otpRpc = new OpenAPIHono<HonoCloudflare>()

  // An RPC used for generating an OTP for the user attempting to login RBPICore
  .openapi(generateOtpRoute, async ctx => {
    const req = ctx.req.valid('json')
    const db = ctx.get('legacy')
    const employee = await getEmployeeByUsername(db, req.username.trim())
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
    let OneTimePassword = (await import('~/emails/en/internal/one-time-password')).default

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
    const coredb = ctx.get('core')
    const actual = await ctx.env.KV.get(`${ req.id }_otpCode`) // req.id is basically the employee id.

    // Matched? Create an account for the internal user and login.
    if (actual && req.input === Number(actual)) {
      const json = await ctx.env.KV.get(`${ req.id }_data`)
      const data = eval(`(${json ?? 'null'})`) as RBPICore.Legacy.GenEmployee | null

      // Return an error when the data has now been purge by KV.
      if (!data) {
        return ctx.json({}, StatusCodes.TOO_MANY_REQUESTS)
      }

      const username = data.username
      const email = `${ data.username }.rbpi@gmail.com`.toLowerCase()

      // Check if internal user already exists in the database
      const [existing] = await coredb.select()
        .from(users)
        .where(eq(users.username, username))
        .limit(1)
      
      const handleLogin = async (userId: string) => {
        const authCtx = await auth.$context

        const session = await authCtx.internalAdapter.createSession(userId)
        const cookieConfig = authCtx.authCookies.sessionToken
        const { name, attributes } = cookieConfig
        const { token } = session

        setCookie(ctx, name, token, attributes)

        return ctx.json({}, StatusCodes.OK)
      }

      if (existing) {
        return handleLogin(existing.id)
      }

      const { user } = await auth.api.createUser({
        body: {
          role: 'user',
          email,
          name: data.fullName,
          data: {
            username,
            emailVerified: true,
          },
        },
      })

      // Side effect when a new user is created
      await coredb
        .insert(internalUsers)
        .values({
          uid: createUniqueId(),
          userId: user.id,
        })

      return handleLogin(user.id)
    } else if (actual && req.input) {
      
    }

    return ctx.json({}, StatusCodes.FORBIDDEN)
  })

export { otpRpc }
