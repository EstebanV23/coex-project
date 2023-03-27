import Nutritionist from '../models/Nutritionist.js'

function handlerNutritionistParnet (property, nameOfId = 'id') {
  return async (req, _, next) => {
    try {
      const id = req[property][nameOfId]
      const nutritionist = await Nutritionist.getUnits(id)
      const { units } = nutritionist
      if (!nutritionist.parnet && units.length >= 3) throw new Error('It is not possible to create more units')
      next()
    } catch (error) {
      error.status = 401
      next(error)
    }
  }
}

export default handlerNutritionistParnet
