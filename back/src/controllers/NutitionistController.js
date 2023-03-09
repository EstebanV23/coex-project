import Nutritionist from '../models/Nutritionist.js'
import buildResponse from '../helpers/buildResponse.js'

const NutritionistController = {
  getNutritionists: async (req, res, next) => {
    try {
      const nutritionists = await Nutritionist.getAll()
      buildResponse(res, 200, 'Nutritionists', nutritionists)
    } catch (err) {
      next(err)
    }
  },
  getNutritionist: async (req, res, next) => {
    try {
      const nutritionist = await Nutritionist.getByEmail(req.params.email)
      buildResponse(res, 200, 'Nutritionist', nutritionist)
    } catch (err) {
      next(err)
    }
  },
  createNutritionist: async (req, res, next) => {
    try {
      const nutritionist = await Nutritionist.create(req.body)
      buildResponse(res, 201, 'Nutritionist created', nutritionist)
    } catch (err) {
      next(err)
    }
  }
}
