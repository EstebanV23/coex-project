import Joi from 'joi'

const nutritionistRegister = Joi.object(
  {
    name: Joi.string()
      .pattern(/^[a-zA-Z]+$/)
      .min(3)
      .required(),
    surname: Joi.string()
      .pattern(/^[a-zA-Z]+$/)
      .min(3)
      .required(),
    email: Joi.string()
      .pattern(/^[a-z0-9.-_]+@[a-z]+\.[a-z]{2,3}$/)
      .required(),
    dni: Joi.string()
      .pattern(/^\d{0,10}$/)
      .required(),
    password: Joi.string()
      .pattern(/^(?=.*[!@#$%^&*?])(?=.*[0-9])(?=.*[A-Z]).{8,}$/)
      .required(),
    phone: Joi.string()
      .pattern(/^(\+\d{12}|\d{10})$/)
  }
)

const nutritionistLogin = Joi.object(
  {
    email: Joi.string()
      .required(),
    password: Joi.string()
      .required()
  }
)

export { nutritionistRegister, nutritionistLogin }
