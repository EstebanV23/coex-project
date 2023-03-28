import Joi from 'joi'

const newTrimesters = Joi.object({
  name: Joi.string()
    .required(),
  document: Joi.any()
    .required(),
  unit: Joi.string()
    .required()
})

const updateTrimesters = Joi.object({
  name: Joi.string(),
  document: Joi.any(),
  trimesterId: Joi.string()
    .required()
})

const deleteTrimesters = Joi.object({
  unit: Joi.string()
    .required(),
  trimesterId: Joi.string()
    .required()
})

export { newTrimesters, updateTrimesters, deleteTrimesters }
