import buildResponse from '../helpers/buildResponse.js'
import Trimester from '../models/Trimester.js'
import Unit from '../models/Unit.js'

const UnitController = {
  createUnit: async (req, res, next) => {
    try {
      const { body, user } = req
      const { name, zoneCenter } = body
      const { id: nutritionist } = user
      const unit = await new Unit({ name, zoneCenter, nutritionist }).create()
      buildResponse.success(res, 200, 'Unit', unit)
    } catch (err) {
      next(err)
    }
  },

  deleteUnit: async (req, res, next) => {
    try {
      const { unitId } = req.body
      const { id: nutritionistId } = req.user
      const deleteResponse = await Unit.delete(nutritionistId, unitId)
      if (deleteResponse.deletedCount === 0) throw new Error('Unit not found')
      await Trimester.deleteFromUnit(unitId)
      buildResponse.success(res, 200, 'Delete unit with his trimesters', deleteResponse)
    } catch (err) {
      next(err)
    }
  },

  updateUnit: async (req, res, next) => {
    try {
      const { unitId, name } = req.body
      const update = await Unit.update(unitId, { name })
      if (update.modifiedCount === 0) throw new Error('Unit not found')
      buildResponse.success(res, 200, 'Update unit success', update)
    } catch (err) {
      next(err)
    }
  }
}

export default UnitController
