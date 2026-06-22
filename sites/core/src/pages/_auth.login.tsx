import { useAppStrings } from "~/values/strings/app";
import { Route } from "./+types/_auth.login";
import { LegacyLoginForm, LegacyLoginOTPForm } from "@components/forms/auth";
import { getT } from "~/locales";
import { createLoginSchema, createOtpVerificationSchema } from "~/values/validations/legacy";
import { data } from "react-router";

import { createLegacyRpcClient } from '~/platform-legacy/rpc/client'
import { StatusCodes } from "http-status-codes";
import { useMemo } from "react";

export const loader = async (args: Route.LoaderArgs) => {
  return {}
}

export const action = async (args: Route.ActionArgs) => {
  const { hono } = args.context
  const t = hono.get('locale')
  const rpc = createLegacyRpcClient()
  const { form } = await args.request.clone().json() as { form: 'login' | 'otp'  }

  // Form submission is submitted from the legacy login form
  if (form === 'login') {
    const json = await args.request.json()
    const login = createLoginSchema(t).safeParse(json)

    if (!login.success) {
      return {
        form,
        success: false,
        errors: login.error.flatten().fieldErrors,
      }
    }
    
    const { username } = login.data
    const res = await rpc.otp.generate.$post({ json: { username } })

    if (res.status === StatusCodes.OK) {
      return {
        form,
        success: true,
        generated: await res.json(),
      }
    }

    return {
      form,
      success: false,
    }
  }

  // Form submission is submitted from the legacy OTP verification form
  if (form === 'otp') {
    const json = await args.request.json()
    const otp = createOtpVerificationSchema(t).safeParse(json)

    if (!otp.success) {
      return {
        form,
        success: false,
        errors: otp.error.flatten().fieldErrors,
      }
    }

    const { id, otp: input } = otp.data
    const res = await rpc.otp.validate.$post({
      json: { id, input },
    })

    if (res.status === StatusCodes.OK) {
      const cookies = res.headers.getSetCookie()
      return data({ form, success: true }, {
        headers: cookies.reduce((acc, cookie) => {
          acc.append('Set-Cookie', cookie)
          return acc
        }, new Headers()),
      })
    }

    return {
      form,
      success: false,
    }
  }

  return {
    success: false,
    errors: [
      'invalid form type',
    ],
  }
}

export default function Login(props: Route.ComponentProps) {
  const { actionData } = props

  const sent = useMemo(() => 
    actionData?.form === 'login' &&
    actionData?.success && 
    actionData?.generated &&
    actionData.generated?.sent, [ actionData ])

  if (sent && actionData?.form === 'login' && actionData.generated) {
    const { generated } = actionData

    return (
      <main>
        <div>
          <LegacyLoginOTPForm {...generated} />
        </div>
      </main>
    )
  }

  if (actionData?.form === 'otp' && actionData?.success) {
    return (<></>)
  }

  return (
    <main>
      <div>
        <LegacyLoginForm />
      </div>
    </main>
  )
}