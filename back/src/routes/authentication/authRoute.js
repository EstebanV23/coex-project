import express from 'express'
import NutritionistController from '../../controllers/NutitionistController.js'
import handlerAuthorizationJWT from '../../middlewares/handlerAuthorizationJWT.js'
import handlerJwtVerify from '../../middlewares/handlerJwtValidate.js'
import handlerNutritionistVerified from '../../middlewares/handlerNutritionistVerified.js'
import validateData from '../../middlewares/validationData.js'
import {
  nutritionistLogin,
  nutritionistRegister,
  nutritionistEmail,
  nutritionistResetPassword,
  nutritionistChangePassword,
  nutritionistAvatar,
  nutritionistUpdate
} from '../../schemas/requestSchema/nutritionistRequest.js'

const authRouter = express.Router()

authRouter
  .post(
    '/signin',
    validateData(nutritionistLogin, 'body'),
    NutritionistController.loginNutritionist
  )
  .post(
    '/signup',
    validateData(nutritionistRegister, 'body'),
    NutritionistController.createNutritionist
  )
  .get(
    '/validate/:token',
    handlerJwtVerify('params'),
    NutritionistController.updateVerify
  )
  .post(
    '/forgot-password',
    validateData(nutritionistEmail, 'body'),
    NutritionistController.forgotPassword
  )
  .post(
    '/forgot-password/:token',
    handlerJwtVerify('params'),
    validateData(nutritionistResetPassword, 'body'),
    NutritionistController.resetPassword
  )
  .post(
    '/nutritionist-email',
    validateData(nutritionistEmail, 'body'),
    NutritionistController.getNutritionist
  )
  .patch(
    '/change-password',
    handlerAuthorizationJWT,
    validateData(nutritionistChangePassword, 'body'),
    NutritionistController.changePassword
  )
  .patch(
    '/update-nutritionist/:id',
    handlerAuthorizationJWT,
    validateData(nutritionistUpdate, 'body'),
    NutritionistController.updateNutritionist
  )
  .patch(
    '/update-avatar',
    handlerAuthorizationJWT,
    validateData(nutritionistAvatar, 'body'),
    NutritionistController.updateAvatar
  )
  .get(
    '/validate-token/:token',
    handlerJwtVerify('params'),
    NutritionistController.tokenValidate
  )
  .post(
    '/again-verify',
    handlerAuthorizationJWT,
    NutritionistController.againVerify
  )
  .get('/get-units/:token',
    handlerJwtVerify('params'),
    handlerNutritionistVerified('user'),
    NutritionistController.getAllUnits
  )

export default authRouter
