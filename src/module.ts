import { defineNuxtModule, createResolver, addServerImports } from '@nuxt/kit'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'

export default defineNuxtModule<SMTPTransport.Options>({
  meta: {
    name: 'nuxt-nodemailer',
    configKey: 'nodemailer',
  },
  setup(_options, _nuxt) {
    _nuxt.options.runtimeConfig.nodemailer = {
      ..._options,
      ..._nuxt.options.runtimeConfig.nodemailer,
    }

    const resolver = createResolver(import.meta.url)
    addServerImports([
      { from: resolver.resolve('./runtime/server/useNodeMailer'), name: 'useNodeMailer' },
    ])
  },
})

declare module '@nuxt/schema' {
  interface RuntimeConfig {
    nodemailer: SMTPTransport.Options
  }
}
