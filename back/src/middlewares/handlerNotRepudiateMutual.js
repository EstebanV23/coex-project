import Nutritionist from '../models/Nutritionist.js'

async function handlerNotRepudiateMutual (req, res, next) {
  try {
    const { id } = req.user
    const { unit } = req.body
    const nutritionistUnit = await Nutritionist.verifyUnitFromNutritionist(id, unit)
    if (!nutritionistUnit) throw new Error('You are not the owner of this unit')
    next()
  } catch (error) {
    next(error)
  }
}

export default handlerNotRepudiateMutual
