import configEnvironment from '../config/configEnvironment.js'
import templateHtmlEmail from './templateHtmlEmail.js'

function templateEmailVerify ({ email, name, token }) {
  const path = `${configEnvironment.uriAppFront}/verify?key=${token}`
  return {
    from: `"MiAnthro " ${configEnvironment.mailUser}`, // sender address
    to: email, // list of receivers
    subject: `MiAnthro te da la bienvenida ${name}, verifícate`, // Subject line
    text: `Si no puedes visualizar, por favor dale click en el siguiente enlace: ${path}`, // plain text body

    html: templateHtmlEmail({
      message: 'Tu registro ha sido exitoso, para verificar tu cuenta, dale click en el siguiente botón y podrás disfrutar de todos nuestros servicios que tenemos para ti',
      title: 'Verifica tu cuenta',
      textButton: 'Verificar cuenta',
      path
    }) // html body
  }
}

export default templateEmailVerify
