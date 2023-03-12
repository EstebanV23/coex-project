import configEnvironment from '../config/configEnvironment.js'

function templateHtmlForgotPassword ({ email, name, token }) {
  return {
    from: `"MiAnthro " ${configEnvironment.mailUser}`, // sender address
    to: email, // list of receivers
    subject: `Hola ${name}, haz olvidado tu contraseña?`, // Subject line
    text: `Si no puedes visualizar, por favor dale click en el siguiente enlace: ${configEnvironment.uriAppFront}/new-password?key=${token}`, // plain text body
    html: `<a href="${configEnvironment.uriAppFront}/new-password?key=${token}">Recuperar contraseña</a>` // html body
  }
}

export default templateHtmlForgotPassword
