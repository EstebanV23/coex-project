import Nutritionist from '../models/Nutritionist.js'
import buildResponse from '../helpers/buildResponse.js'
import { generateToken } from '../config/JWT.js'
import templateEmailVerify from '../helpers/templateEmailVerify.js'
import Mailer from '../models/Mailer.js'
import templateEmailForgotPassword from '../helpers/templateEmailForgotPassword.js'

const NutritionistController = {
  getNutritionists: async (_, res, next) => {
    try {
      const nutritionists = await Nutritionist.getAll()
      buildResponse.success(res, 200, 'Nutritionists', nutritionists)
    } catch (err) {
      next(err)
    }
  },

  getNutritionist: async (req, res, next) => {
    try {
      const nutritionist = await Nutritionist.getByEmail(req.body.email)
      const { email } = nutritionist
      buildResponse.success(res, 200, 'Nutritionist', email)
    } catch (err) {
      buildResponse.success(res, 200, 'Nutritionist', {})
    }
  },

  createNutritionist: async (req, res, next) => {
    try {
      const nutritionist = await new Nutritionist(req.body).create()
      const { _id: id, email, name } = nutritionist
      const token = generateToken({ id })
      const template = templateEmailVerify({ email, token, name })
      await new Mailer(template).sendMail()
      buildResponse.success(res, 201, 'Nutritionist created', { email })
    } catch (err) {
      next(err)
    }
  },

  updateNutritionist: async (req, res, next) => {
    try {
      const { params: { id }, body: data } = req
      await Nutritionist.update(id, data)
      const nutritionist = await Nutritionist.getByEmail(data.email)
      const { email, name, surname, phone, isVerified } = nutritionist
      buildResponse.success(res, 200, 'Nutritionist updated', { email, name, surname, phone, isVerified, id })
    } catch (err) {
      err.status = 403
      err.message = 'Data invalid'
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
      const { _id: id, name, surname, isVerified, phone } = nutritionist
      const token = generateToken({ id })
      const dataNutritionist = { id, name, surname, email, phone, isVerified, token }
      buildResponse.success(res, 200, 'Nutritionist logged', dataNutritionist)
    } catch (err) {
      next(err)
    }
  },

  updateVerify: async (req, res, next) => {
    try {
      const { id } = req.user
      const nutritionist = await Nutritionist.update(id, { isVerified: true, verificationDate: new Date() })
      buildResponse.success(res, 200, 'Nutritionist verified', nutritionist)
    } catch (err) {
      next(err)
    }
  },

  forgotPassword: async (req, res, next) => {
    try {
      const { email } = req.body
      const nutritionist = await Nutritionist.getByEmail(email)
      if (!nutritionist) {
        throw new Error('Nutritionist not found', 404)
      }
      const token = generateToken({ email }, '20m')
      const { name } = nutritionist
      const template = templateEmailForgotPassword({ email, name, token })
      await new Mailer(template).sendMail()
      buildResponse.success(res, 200, 'Token generate', { email })
    } catch (error) {
      next(error)
    }
  },

  resetPassword: async (req, res, next) => {
    try {
      const { email } = req.user
      const { password } = req.body
      const nutritionist = await Nutritionist.getByEmail(email)
      if (!nutritionist) {
        throw new Error('Nutritionist not found', 404)
      }
      Nutritionist.updateByEmail(email, { password })
      buildResponse.success(res, 200, 'Password updated', { email })
    } catch (error) {
      next(error)
    }
  },

  changePassword: async (req, res, next) => {
    const ERROR_MESSAGE = 'Password incorrect'
    try {
      const { email, oldPassword, password } = req.body
      const nutritionist = await Nutritionist.login(email, oldPassword)
      if (!nutritionist) {
        throw new Error(ERROR_MESSAGE, 401)
      }
      Nutritionist.updateByEmail(email, { password })
      buildResponse.success(res, 200, 'Update success', {})
    } catch (err) {
      next(err)
    }
  }
}

export default NutritionistController
