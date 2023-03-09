import Nutritionist from '../models/Nutritionist'

const NutritionistController = {
  getNutritionists: async (req, res) => {
    try {
      const nutritionists = await Nutritionist.getAll()
      res.status(200).json(nutritionists)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
