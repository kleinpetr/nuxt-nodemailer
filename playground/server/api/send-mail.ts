export default defineEventHandler(async () => {
  try {
    const config = useRuntimeConfig();

    console.info('=== API ROUTE CALLED ===')
    console.info('Runtime config:', config.nodemailer)
    console.info('Sending mail to:', config.smtpSendTo)
    
    const { sendMail } = useNodeMailer()
    
    const result = await sendMail({ 
      subject: 'Nuxt + nodemailer', 
      text: 'Hello from nuxt-nodemailer!', 
      to: config.smtpSendTo as string
    })
    
    console.info('Email sent successfully!', result)
    
    return {
      success: true,
      messageId: result.messageId,
      message: 'Email sent successfully'
    }
  } catch (error) {
    console.error('=== EMAIL ERROR ===', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to send email',
      data: error
    })
  }
})