import Joi from 'joi'

const newUnits = Joi.object({
  name: Joi.string()
    .required(),
  zoneCenter: Joi.string()
    .required()
})

const deleteUnits = Joi.object({
  unitId: Joi.string()
    .required()
})

const updateUnits = Joi.object({
  unitId: Joi.string()
    .required(),
  name: Joi.string()
    .required()
})

export { newUnits, deleteUnits, updateUnits }
