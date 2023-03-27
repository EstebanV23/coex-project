import Nutritionist from '../models/Nutritionist.js'

async function handlerNotRepudiateMutual (req, res, next) {
  try {
    const { id } = req.user
    const { unitId } = req.body
    const nutritionistUnit = await Nutritionist.verifyUnitFromNutritionist(id, unitId)
    if (!nutritionistUnit) throw new Error('You are not the owner of this unit')
    next()
  } catch (error) {
    next(error)
  }
}

export default handlerNotRepudiateMutual
