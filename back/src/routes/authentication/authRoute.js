import express from 'express'
import NutritionistController from '../../controllers/NutitionistController.js'
import handlerJwtVerify from '../../middlewares/handlerJwtValidate.js'
import validateData from '../../middlewares/validationData.js'
import { nutritionistLogin, nutritionistRegister } from '../../schemas/requestSchema/nutritionistRequest.js'

const authRouter = express.Router()

authRouter
  .post('/signin', validateData(nutritionistLogin, 'body'), NutritionistController.loginNutritionist)
  .post('/signup', validateData(nutritionistRegister, 'body'), NutritionistController.createNutritionist)
  .get('/validate/:token', handlerJwtVerify('params'), NutritionistController.updateVerify)
export default authRouter
