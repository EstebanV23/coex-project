import Joi from 'joi'

const nutritionistRegister = Joi.object(
  {
    name: Joi.string()
      .pattern(/^(?!\s)+[a-zA-Z ]+[a-zA-Z]$/)
      .min(3)
      .required(),
    surname: Joi.string()
      .pattern(/^(?!\s)+[a-zA-Z ]+[a-zA-Z]$/)
      .min(3)
      .required(),
    email: Joi.string()
      .pattern(/^[a-z0-9.-_]+@[a-z]+\.[a-z]{2,3}$/)
      .required(),
    password: Joi.string()
      .pattern(/^(?=.*[0-9])(?=.*[A-Z]).{8,}$/)
      .required(),
    phone: Joi.string()
      .pattern(/^(\+\d{12}|\d{10})$/)
  }
)

const nutritionistUpdate = Joi.object(
  {
    name: Joi.string()
      .pattern(/^(?!\s)+[a-zA-Z ]+[a-zA-Z]$/)
      .min(3)
      .required(),
    surname: Joi.string()
      .pattern(/^(?!\s)+[a-zA-Z ]+[a-zA-Z]$/)
      .min(3)
      .required(),
    email: Joi.string()
      .pattern(/^[a-z0-9.-_]+@[a-z]+\.[a-z]{2,3}$/)
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

const nutritionistEmail = Joi.object(
  {
    email: Joi.string()
      .pattern(/^[a-z0-9.-_]+@[a-z]+\.[a-z]{2,3}$/)
      .required()
  }
)

const nutritionistAvatar = Joi.object(
  {
    avatar: Joi.string()
      .required()
  }
)

const nutritionistResetPassword = Joi.object(
  {
    password: Joi.string()
      .pattern(/^(?=.*[0-9])(?=.*[A-Z]).{8,}$/)
      .required()
  }
)

const nutritionistChangePassword = Joi.object(
  {
    email: Joi.string()
      .pattern(/^[a-z0-9.-_]+@[a-z]+\.[a-z]{2,3}$/)
      .required(),
    oldPassword: Joi.string()
      .pattern(/^(?=.*[0-9])(?=.*[A-Z]).{8,}$/)
      .required(),
    password: Joi.string()
      .pattern(/^(?=.*[0-9])(?=.*[A-Z]).{8,}$/)
      .required()
  }
)

export { nutritionistRegister, nutritionistLogin, nutritionistEmail, nutritionistResetPassword, nutritionistChangePassword, nutritionistAvatar, nutritionistUpdate }
