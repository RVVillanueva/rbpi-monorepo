
import { err, ok } from 'neverthrow';
import { Resend } from 'resend'

export interface SendMailOptions {
  to: string | string[]
  subject: string
  html: string
  text?: string
}

export interface MailerResponse {
  id: string
  message: string
}

export const createMailerClient = async (env: CloudflareBindings) => {
  const resend = new Resend(env.RESEND_KEY)

  async function sendEmail(opts: SendMailOptions) {
    
    if (env.RESEND_KEY) {
      const res = await resend.emails.send({
        from: env.EMAIL_FROM,
        to: opts.to,
        subject: opts.subject,
        html: opts.html,
        text: opts.text,
      })

      if (res.error) return err({
        id: res.error.statusCode?.toString(),
        message: res.error.message,
      } as MailerResponse)

      return ok({
        id: res.data?.id,
        message: 'ok',
      } as MailerResponse)
    }

  }

  return { sendEmail }
}