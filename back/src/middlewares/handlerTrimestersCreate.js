import Unit from '../models/Unit.js'

function handlerTrimestersCreate (property, nameOfId = 'unit') {
  return async (req, _, next) => {
    try {
      const id = req[property][nameOfId]
      const unit = await Unit.getOne(id)
      if (unit.trimesters.length >= 4) throw new Error('The unit already has 4 trimesters')
      next()
    } catch (error) {
      error.status = 401
      next(error)
    }
  }
}

export default handlerTrimestersCreate
