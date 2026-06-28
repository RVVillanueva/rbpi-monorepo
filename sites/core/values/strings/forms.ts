import { useT } from "@/context/hono";
import { useMemo } from "react";
import { useAppStrings } from "./app";

export function useFormStrings() {
  const t = useT()
  const appStrings = useAppStrings()

  return useMemo(() => ({
    legacy: {
      loginTitleString: appStrings.appName,
      loginFormStrings: {
        usernameTitle: t('legacy.auth.login_form.username.title', 'Username'),
        usernamePlaceholder: t('legacy.auth.login_form.username.placeholder', 'JDCruz'),
        formSubmitButton: t('legacy.auth.login_form.submit_button', 'Send OTP'),
      },

      verificationTitleString: t('legacy.auth.verification_form.title', 'Email Verification'),
      verificationSentToEmailAlertTitle: t('legacy.auth.verification_form.sent_to_email_alert_title', 'Sent OTP'),
      verificationSentToEmailString: (email: string) => t('legacy.auth.verification_form.sent_to_email', 'OTP code was sent via email, please check the inbox of {{ email }} for the code', { email }),
      verificationFormStrings: {
        formDescription: t('legacy.auth.verification_form.form_description', `We sent you a One-Time Password (OTP) to verify if it’s really you accessing RBPICore.`),
        formOtpCodeTitle: t('legacy.auth.verification_form.otp_code_title', 'OTP Code'),
        formOtpCodePlaceholder: t('legacy.auth.verification_form.otp_code_placeholder', '000000'),
        formOtpCodeSubmitButton: t('legacy.auth.verification_form.otp_code_submit_button', 'Login Account'),
        formOtpCodeResend: t('legacy.auth.verification_form.otp_code_resend', 'Resend OTP'),
      },
    },
  }), [t, appStrings])
}