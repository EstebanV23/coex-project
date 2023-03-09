import { createTransport, getTestMessageUrl } from 'nodemailer'
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
  const info = await transporter.sendMail({
    from: `"MiAnthro " ${configEnvironment.mailUser}`, // sender address
    to: 'cagexor450@maazios.com', // list of receivers
    subject: `MiAnthro te da la bienvenida ${name}, verifícate`, // Subject line
    text: `Si no puedes visualizar, por favor dale click en el siguiente enlace: http://localhost:5000/test/validate/${token}`, // plain text body
    html: `<a href="http://localhost:5000/test/validate/${token}">Verifica tu cuenta</a>` // html body
  })

  console.log('Message sent: %s', info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', getTestMessageUrl(info))
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export default sendMail
