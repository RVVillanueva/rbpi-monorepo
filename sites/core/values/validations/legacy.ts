import { z } from "zod";
import { getT, TFunction } from "~/locales";

export type LegacyLoginSchema = z.infer<ReturnType<typeof createLoginSchema>>
export type LegacyOTPVerificationSchema = z.infer<ReturnType<typeof createOtpVerificationSchema>>

export const createLoginSchema = (t: TFunction) => z.object({
  form: z.enum([ 'login', 'otp' ]),
  
  username: z
    .string()
    .min(1, t(
      'validations.legacy.login_form.username_required', 
      'Username is required',
    ))
    .regex(/^[A-Z]{3}/, 'Invalid username'),
})

export const createOtpVerificationSchema = (t: TFunction) => {
  const invalidCodeMsg = t(
    "validations.legacy.verification_form.invalid",
    "Invalid OTP code",
  )

  const invalidInput = t(
    "validations.legacy.verification_form.invalid_input",
    "Invalid input",
  )

  const invalidEmail = t(
    "validations.legacy.verification_form.invalid_email", 
    "Email malformed",
  )

  return z.object({
    form: z.enum([ 'login', 'otp' ]),

    id: z
      .number(invalidInput)
      .min(0, invalidInput)
      .max(999999, invalidInput),

    email: z
      .email(invalidEmail),

    otp: z
      .number(invalidInput)
      .min(100000, invalidCodeMsg)
      .max(999999, invalidCodeMsg),
  })
}