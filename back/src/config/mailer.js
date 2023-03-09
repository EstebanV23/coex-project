import { createTransport } from 'nodemailer'
import configEnvironment from './configEnvironment.js'

// async..await is not allowed in global scope, must use a wrapper
async function sendMail (token, name) {
  // create reusable transporter object using the default SMTP transport
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: configEnvironment.mailUser, // generated ethereal user
      pass: configEnvironment.mailPass // generated ethereal password
    }
  })

  // send mail with defined transport object
  await transporter.sendMail({
    from: `"MiAnthro " ${configEnvironment.mailUser}`, // sender address
    to: 'cagexor450@maazios.com', // list of receivers
    subject: `MiAnthro te da la bienvenida ${name}, verifícate`, // Subject line
    text: `Si no puedes visualizar, por favor dale click en el siguiente enlace: ${configEnvironment.uriApp}/test/validate/${token}`, // plain text body
    html: `<a href="${configEnvironment.uriApp}/test/validate/${token}">Verifica tu cuenta</a>` // html body
  })
}

export default sendMail
