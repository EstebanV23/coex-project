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
      const nutritionist = new Nutritionist(req.body).create()
      buildResponse(res, 201, 'Nutritionist created', nutritionist)
    } catch (err) {
      next(err)
    }
  },
  updateNutritionist: async (req, res, next) => {
    try {
      const { params: { id }, body: data } = req
      const result = await Nutritionist.update(id, data)
      buildResponse(res, 200, 'Nutritionist updated', nutritionist)
    } catch (err) {
      next(err)
    }
  }
}

export default NutritionistController
