import Joi from 'joi'

const nutritionistSchemaJoi = Joi.object(
  {
    name: Joi.string()
      .pattern(/^[a-zA-Z]+$/)
      .min(3)
      .required(),
    surname: Joi.string()
      .pattern(/^[a-zA-Z]+$/)
      .min(3)
      .required(),
    email: {
      type: String,
      required: true
    },
    dni: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    verify: {
      type: Boolean,
      required: false
    },
    phone: {
      type: String,
      required: false
    },
    createdAt: {
      type: Date,
      required: true
    },
    verificationDate: {
      type: Date,
      required: false
    },
    lastConnection: {
      type: Date,
      required: false
    }
  }
)

export default nutritionistSchemaJoi
