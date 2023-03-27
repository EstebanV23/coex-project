import Nutritionist from '../models/Nutritionist.js'

function handlerNutritionistVerified (property, nameOfId = 'id') {
  return async (req, _, next) => {
    try {
      const id = req[property][nameOfId]
      const nutritionist = await Nutritionist.getOne(id)
      if (!nutritionist.isVerified) throw new Error('Nutritionist not verified')
      next()
    } catch (error) {
      error.status = 401
      next(error)
    }
  }
}

export default handlerNutritionistVerified
