# nuxt-nodemailer
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]
[![Volta][volta-src]][volta-href]

[![Buy me a coffee][buymecoffee-src]][buymeacoffee-href]

> Adds nodemailer to the Nuxt3
> 
> This module can be used to send emails only from the server-side in Nuxt3.

## Features
- Auto import server composable `useNodeMailer()`
- Add `sendEmail()` which inherits `from` argument
- Expose `nodemailer` original instance
- Using env variables for configuration

<!-- INSTALL/ -->
## Install

```bash
# Using ni
ni -D nuxt-nodemailer nodemailer

# Using pnpm
pnpm add -D nuxt-nodemailer nodemailer

# Using yarn
yarn add --dev nuxt-nodemailer nodemailer

# Using npm
npm install --save-dev nuxt-nodemailer nodemailer
```
<!-- /INSTALL -->

## Configuration

Add `nuxt-nodemailer` to the `modules` sections of your `nuxt.config.js`. 

> the configuration uses the same options as nodemailer you can find them [here](https://nodemailer.com/smtp/)
  
  ```ts
  export default {
    modules: [
      'nuxt-nodemailer'
    ],
    nodemailer: {
      from: '"John Doe" <john@doe.com>',
      host: 'smtp.mailtrap.io',
      port: 465,
      secure: true,
      auth: {
        user: 'john@doe.com',
        pass: '',
      },
    },
  }
```

### Environment Variables
It's recommended to use environment variables for sensitive information like passwords.

each option in the `nodemailer` configuration can be overwritten using environment variables. It has to be prefixed with `NUXT_NODEMAILER_` and in uppercase.

For example, to overwrite the `auth.pass` and `from` options you can use the following environment variables:

```bash
NUXT_NODEMAILER_AUTH_PASS=yourpassword
NUXT_NODEMAILER_FROM="..."
```

> Warning: You can overwrite only existing options in the `nodemailer` configuration in the `nuxt.config.js` file.


## Usage
In the server event handler, you can use the `useNodeMailer` composable to send emails.

```ts
export default defineEventHandler(() => {
  const { sendMail } = useNodeMailer()

  return sendMail({ subject: 'Nuxt + nodemailer', text: 'Hello from nuxt-nodemailer!', to: 'john@doe.com' })
})
```
> the benefit of using `sendMail` is that it automatically inherits the `from` argument from the configuration and you don't have to specify it every time.

You can also use the `transport` with your config options or create brand new transport using `nodemailer` instance directly.

```ts
export default defineEventHandler(() => {
  const { transport, nodemailer } = useNodeMailer()

  // you can create a new transport
  return nodemailer.createTransport(...)

  // or use the existing one
  return transport.sendMail(...)
})
```

[npm-version-src]: https://img.shields.io/npm/v/nuxt-nodemailer/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-nodemailer

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-nodemailer.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-nodemailer

[license-src]: https://img.shields.io/npm/l/nuxt-nodemailer.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-nodemailer

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com

[volta-src]: https://user-images.githubusercontent.com/904724/209143798-32345f6c-3cf8-4e06-9659-f4ace4a6acde.svg
[volta-href]: https://volta.net/kleinpetr/nuxt-nodemailer

[buymecoffee-src]: https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png
[buymeacoffee-href]: https://www.buymeacoffee.com/kleinpetr
