import express from 'express'
import TrimesterController from '../../controllers/TrimesterController.js'
import handlerAuthorizationJWT from '../../middlewares/handlerAuthorizationJWT.js'
import handlerNotRepudiateMutual from '../../middlewares/handlerNotRepudiateMutual.js'
import handlerNutritionistVerified from '../../middlewares/handlerNutritionistVerified.js'
import handlerTrimestersCreate from '../../middlewares/handlerTrimestersCreate.js'
import validateData from '../../middlewares/validationData.js'
import { newTrimesters, updateTrimesters, deleteTrimesters } from '../../schemas/requestSchema/trimestersRequest.js'

const trimestersRouter = express.Router()

trimestersRouter.use(
  handlerAuthorizationJWT,
  handlerNutritionistVerified('user'),
  handlerNotRepudiateMutual
)

trimestersRouter
  .post(
    '/create',
    handlerTrimestersCreate('body'),
    validateData(newTrimesters, 'body'),
    TrimesterController.createTrimester
  )
  .patch(
    '/update',
    validateData(updateTrimesters, 'body'),
    TrimesterController.updateTrimester
  )
  .delete(
    '/delete',
    validateData(deleteTrimesters, 'body'),
    TrimesterController.deleteTrimester
  )
  .post(
    '/get',
    validateData(deleteTrimesters, 'body'),
    TrimesterController.getTrimester
  )

export default trimestersRouter
