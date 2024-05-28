import { createTransport } from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'

export const useNodeMailer = () => {
  // @ts-ignore can't see auto-imports in that context
  const { nodemailer } = useRuntimeConfig()
  const transport = createTransport(nodemailer as SMTPTransport.Options)

  const sendMail = (options: SMTPTransport.MailOptions) => transport.sendMail({
    from: nodemailer.from,
    ...options,
  })

  return {
    nodemailer,
    sendMail,
    transport,
  }
}
