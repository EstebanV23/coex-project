import Nutritionist from '../models/Nutritionist.js'
import moment from 'moment'

async function handlerVerifyDate (req, res, next) {
  try {
    const { id } = req.user
    const nutritionist = await Nutritionist.getOne(id)
    if (!nutritionist) throw new Error('Nutritionist not found')
    const createDate = moment(new Date(nutritionist.createdAt))
    const now = moment(new Date())
    if (now.diff(createDate, 'days') > 3 && !nutritionist.isVerified) {
      await Nutritionist.delete(id)
      throw new Error('Time off to verify, delete account and create a new one')
    }
    next()
  } catch (error) {
    error.message = 'Expired or invalid token'
    error.status = 401
    next(error)
  }
}

export default handlerVerifyDate
