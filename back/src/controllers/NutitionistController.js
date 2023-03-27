import Nutritionist from '../models/Nutritionist.js'
import buildResponse from '../helpers/buildResponse.js'
import { generateToken } from '../config/JWT.js'
import templateEmailVerify from '../helpers/templateEmailVerify.js'
import Mailer from '../models/Mailer.js'
import templateEmailForgotPassword from '../helpers/templateEmailForgotPassword.js'
import uploadCloudinary from '../helpers/uploadCloudinary.js'

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
      const { email, isVerified, parnet, _id: id } = nutritionist
      buildResponse.success(res, 200, 'Nutritionist', { email, isVerified, parnet, id })
    } catch (err) {
      buildResponse.success(res, 200, 'Nutritionist', {})
    }
  },

  createNutritionist: async (req, res, next) => {
    try {
      const nutritionist = await new Nutritionist(req.body).create()
      const { _id: id, email, name } = nutritionist
      const token = generateToken({ id }, '3 days')
      const template = templateEmailVerify({ email, token, name })
      await new Mailer(template).sendMail()
      buildResponse.success(res, 201, 'Nutritionist created', { email })
    } catch (err) {
      next(err)
    }
  },

  againVerify: async (req, res, next) => {
    try {
      const { id } = req.user
      const nutritionist = await Nutritionist.getOne(id)
      const { email, name, isVerified, retriesVerify } = nutritionist
      if (isVerified || retriesVerify >= 2) throw new Error('You cant go retry create a verify token')
      const token = generateToken({ id }, '3 days')
      const template = templateEmailVerify({ email, token, name })
      await new Mailer(template).sendMail()
      const newRetries = retriesVerify + 1
      await Nutritionist.update(id, { retriesVerify: newRetries })
      buildResponse.success(res, 201, 'Send new verify', { email, retriesVerify: newRetries })
    } catch (err) {
      next(err)
    }
  },

  updateNutritionist: async (req, res, next) => {
    try {
      const { params: { id }, body: data } = req
      await Nutritionist.update(id, data)
      const nutritionist = await Nutritionist.getByEmail(data.email)
      const { email, name, surname, phone, isVerified, avatar, parnet, retriesVerify } = nutritionist
      buildResponse.success(res, 200, 'Nutritionist updated', { email, name, surname, phone, isVerified, id, avatar, parnet, retriesVerify })
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
      const { _id: id, name, surname, isVerified, phone, avatar, parnet, retriesVerify } = nutritionist
      const token = generateToken({ id }, '7 days')
      const dataNutritionist = { id, name, avatar, surname, email, phone, isVerified, token, parnet, retriesVerify }
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

  updateAvatar: async (req, res, next) => {
    try {
      const { id } = req.user
      const { avatar } = req.body
      const avatarUrl = await uploadCloudinary(avatar, id)
      await Nutritionist.update(id, { avatar: avatarUrl })
      buildResponse.success(res, 200, 'Update success', avatarUrl)
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
      const token = generateToken({ email }, '10m')
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
  },

  tokenValidate: async (_, res) => {
    buildResponse.success(res, 200, 'Token valid', {})
  },

  getAllUnits: async (req, res) => {
    const { id } = req.params
    const nutritinist = await Nutritionist.getUnits(id)
    return buildResponse.success(res, 200, 'Nutritionist', nutritinist)
  }
}

export default NutritionistController
