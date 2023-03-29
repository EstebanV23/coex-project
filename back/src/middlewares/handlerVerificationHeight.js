import Trimester from '../models/Trimester.js'
import Unit from '../models/Unit.js'
import buildResponse from '../helpers/buildResponse.js'

async function handlerVerificationHeight (req, res, next) {
  try {
    const { document, unit } = req.body
    const unitSelected = await Unit.getOne(unit)
    if (!unitSelected) throw new Error('Unit not found')
    const lengthDocuments = unitSelected.trimesters.length - 1
    if (lengthDocuments < 0) {
      next()
      return
    }
    const lastTrimesterId = unitSelected.trimesters[unitSelected.trimesters.length - 1]
    const lastTrimester = await Trimester.getOne(lastTrimesterId)
    const lastDocument = lastTrimester.document
    const heighsIncorrects = []
    for (const lastField of lastDocument) {
      for (const field of document) {
        if ((lastField.registro === field.registro) && (field.talla <= lastField.talla)) {
          heighsIncorrects.push(field.registro)
          break
        }
      }
    }
    if (heighsIncorrects.length > 0) {
      buildResponse.success(res, 403, 'Tallas incorrectas', heighsIncorrects)
    } else {
      next()
    }
  } catch (error) {
    next(error)
  }
}

export default handlerVerificationHeight
