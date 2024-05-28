export default defineEventHandler(() => {
  console.log(useRuntimeConfig().nodemailer)
  const { sendMail } = useNodeMailer()
  return sendMail({ subject: 'Nuxt + nodemailer', text: 'Hello from nuxt-nodemailer!', to: 'petr@kleinpetr.com' })
})
