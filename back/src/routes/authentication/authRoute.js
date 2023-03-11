import express from 'express'
import NutritionistController from '../../controllers/NutitionistController.js'
import handlerJwtVerify from '../../middlewares/handlerJwtValidate.js'
import validateData from '../../middlewares/validationData.js'
import { nutritionistLogin, nutritionistRegister, nutritionistForgotPassword, nutritionistResetPassword } from '../../schemas/requestSchema/nutritionistRequest.js'

const authRouter = express.Router()

authRouter
  .post('/signin', validateData(nutritionistLogin, 'body'), NutritionistController.loginNutritionist)
  .post('/signup', validateData(nutritionistRegister, 'body'), NutritionistController.createNutritionist)
  .get('/validate/:token', handlerJwtVerify('params'), NutritionistController.updateVerify)
  .post('/forgot-password', validateData(nutritionistForgotPassword, 'body'), NutritionistController.forgotPassword)
  .post('/forgot-password/:token', handlerJwtVerify('params'), validateData(nutritionistResetPassword, 'body'), NutritionistController.resetPassword)
export default authRouter
