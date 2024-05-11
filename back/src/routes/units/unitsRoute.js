import express from 'express'
import UnitController from '../../controllers/UnitController.js'
import handlerAuthorizationJWT from '../../middlewares/handlerAuthorizationJWT.js'
import handlerNutritionistParnet from '../../middlewares/handlerNutritionistParnet.js'
import handlerNutritionistVerified from '../../middlewares/handlerNutritionistVerified.js'
import validateData from '../../middlewares/validationData.js'
import { newUnits, deleteUnits, updateUnits } from '../../schemas/requestSchema/unitsRequest.js'

const unitsRouter = express.Router()

unitsRouter.use(
  handlerAuthorizationJWT,
  handlerNutritionistVerified('user')
)

unitsRouter
  .post(
    '/create',
    handlerNutritionistParnet('user'),
    validateData(newUnits, 'body'),
    UnitController.createUnit
  )
  .delete(
    '/delete',
    validateData(deleteUnits, 'body'),
    UnitController.deleteUnit
  )
  .patch(
    '/update',
    validateData(updateUnits, 'body'),
    UnitController.updateUnit
  )

export default unitsRouter
