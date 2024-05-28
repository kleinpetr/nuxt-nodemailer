# nuxt-nodemailer

<a href="https://www.buymeacoffee.com/kleinpetr">
      <img
        src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
        alt="Buy Me a Coffee"
        width="114"
      >
</a>

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
It's recommended to use environment variables for sensitive information like `pass`.

each option in the `nodemailer` configuration can be overwritten using environment variables. It has to be prefixed with `NUXT_NODEMAILER_` and in uppercase.

For example, to overwrite the `auth.pass` and `from` options you can use the following environment variables:

```bash
NUXT_NODEMAILER_AUTH_PASS=yourpassword
NUXT_NODEMAILER_FROM="..."
```

> Warning: You can overwrite only existing options in the `nodemailer` configuration.


## Usage
In the server event handler, you can use the `useNodeMailer` composable to send emails.

```ts
export default defineEventHandler(() => {
  const { sendMail } = useNodeMailer()

  return sendMail({ subject: 'Nuxt + nodemailer', text: 'Hello from nuxt-nodemailer!', to: 'petr@kleinpetr.com' })
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
