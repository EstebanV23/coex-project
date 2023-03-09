import Nutritionist from '../models/Nutritionist'

const NutritionistController = {
  async index (req, res) {
    const nutritionists = await Nutritionist.getAll()
    res.json(nutritionists)
  }
}
