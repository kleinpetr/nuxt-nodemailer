export default defineNuxtConfig({
  compatibilityDate: '2025-10-02',
  devtools: { enabled: true },
  modules: ['../src/module'],

  features: {
    devLogs: true  // show logs for server side routes
  },

  nodemailer: {
    host: process.env.NUXT_SMTP_HOST,
    port: process.env.NUXT_SMTP_PORT as number | undefined,
    auth: {
      user: process.env.NUXT_SMTP_USERNAME,
      pass: process.env.NUXT_SMTP_PASSWORD,
    }
  },

  runtimeConfig: {
    smtpSendTo: process.env.NUXT_SMTP_SEND_TO
  }

})
