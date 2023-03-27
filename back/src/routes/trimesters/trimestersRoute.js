import express from 'express'
import TrimesterController from '../../controllers/TrimesterController.js'
import validateData from '../../middlewares/validationData.js'
import { newTrimesters, updateTrimesters, deleteTrimesters } from '../../schemas/requestSchema/trimestersRequest.js'

const trimestersRouter = express.Router()

trimestersRouter
  .post(
    '/create',
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

export default trimestersRouter
