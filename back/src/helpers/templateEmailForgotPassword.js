import configEnvironment from '../config/configEnvironment.js'
import templateHtmlEmail from './templateHtmlEmail.js'

function templateEmailForgotPassword ({ email, name, token }) {
  const path = `${configEnvironment.uriAppFront}/new-password?key=${token}`
  return {
    from: `"MiAnthro " ${configEnvironment.mailUser}`, // sender address
    to: email, // list of receivers
    subject: `Hola ${name}, haz olvidado tu contraseña en MiAnthro?`, // Subject line
    text: `Si no puedes visualizar, por favor dale click en el siguiente enlace: ${path}`, // plain text body
    html: templateHtmlEmail({
      message: 'Para recuperar tu contraseña, dale click en el siguiente botón y realiza el cambio de tu contraseña',
      title: 'Recuperar contraseña',
      textButton: 'Recuperar contraseña',
      path
    }), // html body
    attachments: [
      {
        filename: 'logo.png',
        path: 'public/logo.png',
        cid: 'logo'
      }
    ]
  }
}

export default templateEmailForgotPassword
