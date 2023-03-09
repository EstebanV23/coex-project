/**
  * @param {Object} schema - Joi schema
*/
function validateData (schema, property) {
  return (req, res, next) => {
    const data = req[property]
    const validate = schema.validate(data, { abortEarly: false })
    validate.error
      ? next(validate.error)
      : next()
  }
}

export default validateData
