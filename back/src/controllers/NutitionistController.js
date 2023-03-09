import Nutritionist from '../models/Nutritionist.js'
import buildResponse from '../helpers/buildResponse.js'

const NutritionistController = {
  getNutritionists: async (req, res) => {
    try {
      const nutritionists = await Nutritionist.getAll()
      buildResponse(res, 200, 'Nutritionists', nutritionists)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
