import configEnvironment from '../config/configEnvironment.js'

function templateEmailVerify ({ email, name, token }) {
  return {
    from: `"MiAnthro " ${configEnvironment.mailUser}`, // sender address
    to: email, // list of receivers
    subject: `MiAnthro te da la bienvenida ${name}, verifícate`, // Subject line
    text: `Si no puedes visualizar, por favor dale click en el siguiente enlace: ${configEnvironment.uriApp}/auth/validate/${token}`, // plain text body
    html: `<a href="${configEnvironment.uriAppFront}/verify?key=${token}">Verifica tu cuenta</a>` // html body
  }
}

export default templateEmailVerify
