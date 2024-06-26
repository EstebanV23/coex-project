import buildResponse from '../helpers/buildResponse.js'
import Trimester from '../models/Trimester.js'

const TrimesterController = {
  createTrimester: async (req, res, next) => {
    try {
      const { body } = req
      const trimester = await new Trimester(body).create()
      buildResponse.success(res, 200, 'New trimester created', trimester)
    } catch (error) {
      next(error)
    }
  },

  updateTrimester: async (req, res, next) => {
    try {
      const { trimesterId, name, document } = req.body
      const update = await Trimester.update(trimesterId, { name, document })
      if (update.modifiedCount === 0) throw new Error('Trimester not found')
      buildResponse.success(res, 200, 'Update trimester success', update)
    } catch (error) {
      next(error)
    }
  },

  deleteTrimester: async (req, res, next) => {
    try {
      const { trimesterId, unit } = req.body
      const trimester = await Trimester.delete(trimesterId, unit)
      if (trimester.deletedCount === 0) throw new Error('Trimester not found')
      buildResponse.success(res, 200, 'Delete trimester success', trimester)
    } catch (error) {
      next(error)
    }
  },

  getTrimester: async (req, res, next) => {
    try {
      const { trimesterId } = req.body
      const trimester = await Trimester.getOne(trimesterId)
      if (!trimester) throw new Error('Trimester not found')
      buildResponse.success(res, 200, 'Delete trimester success', trimester)
    } catch (error) {
      next(error)
    }
  }
}

export default TrimesterController
