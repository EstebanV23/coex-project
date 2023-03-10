import Nutritionist from '../models/Nutritionist.js'
import buildResponse from '../helpers/buildResponse.js'
import sendMail from '../config/mailer.js'
import { generateToken } from '../config/JWT.js'
import encryptPassword from '../helpers/encryptPassword.js'

const NutritionistController = {
  getNutritionists: async (req, res, next) => {
    try {
      const nutritionists = await Nutritionist.getAll()
      buildResponse.success(res, 200, 'Nutritionists', nutritionists)
    } catch (err) {
      next(err)
    }
  },

  getNutritionist: async (req, res, next) => {
    try {
      const nutritionist = await Nutritionist.getByEmail(req.params.email)
      buildResponse.success(res, 200, 'Nutritionist', nutritionist)
    } catch (err) {
      next(err)
    }
  },

  createNutritionist: async (req, res, next) => {
    try {
      const { password } = req.body
      req.body.password = await encryptPassword(password, 10)
      const nutritionist = await new Nutritionist(req.body).create()
      const { _id: id, email, name } = nutritionist
      sendMail(email, generateToken({ id }), name)
      buildResponse.success(res, 201, 'Nutritionist created', { email })
    } catch (err) {
      next(err)
    }
  },

  updateNutritionist: async (req, res, next) => {
    try {
      const { params: { id }, body: data } = req
      const nutritionist = await Nutritionist.update(id, data)
      buildResponse.success(res, 200, 'Nutritionist updated', nutritionist)
    } catch (err) {
      next(err)
    }
  },

  deleteNutritionist: async (req, res, next) => {
    try {
      const { params: { id } } = req
      const nutritionist = await Nutritionist.delete(id)
      buildResponse.success(res, 200, 'Nutritionist deleted', nutritionist)
    } catch (err) {
      next(err)
    }
  },

  loginNutritionist: async (req, res, next) => {
    const ERROR_MESSAGE = 'Email or password incorrect'
    try {
      const { email, password } = req.body
      const nutritionist = await Nutritionist.login(email, password)
      if (!nutritionist) {
        throw new Error(ERROR_MESSAGE, 401)
      }
      await Nutritionist.update(nutritionist._id, { lastConnection: new Date() })
      const { _id: id, name, surname } = nutritionist
      const token = generateToken({ id, name, surname })
      buildResponse.success(res, 200, 'Nutritionist logged', token)
    } catch (err) {
      next(err)
    }
  },

  updateVerify: async (req, res, next) => {
    try {
      const { id } = req.user
      const nutritionist = await Nutritionist.update(id, { verify: true, verificationDate: new Date() })
      buildResponse.success(res, 200, 'Nutritionist verified', nutritionist)
    } catch (err) {
      next(err)
    }
  }
}

export default NutritionistController
