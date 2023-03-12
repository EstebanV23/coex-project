import { createTransport } from 'nodemailer'
import configEnvironment from './configEnvironment.js'

// async..await is not allowed in global scope, must use a wrapper
async function emailSend (infoBody) {
  // create reusable transporter object using the default SMTP transport
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: configEnvironment.mailUser,
      pass: configEnvironment.mailPass
    }
  })

  // send mail with defined transport object
  await transporter.sendMail(infoBody)
}

export default emailSend
