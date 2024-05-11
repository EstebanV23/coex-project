import Nutritionist from '../models/Nutritionist.js'
import moment from 'moment'

async function handlerVerifyDateLogin (req, res, next) {
  try {
    const { email } = req.body
    const nutritionist = await Nutritionist.getByEmail(email)
    if (!nutritionist) throw new Error('Nutritionist not found')
    const { _id: id } = nutritionist
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

export default handlerVerifyDateLogin
