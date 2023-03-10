import mongoose from 'mongoose'

const nutritionistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  dni: {
    type: String,
    unique: true,
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
})

const schemaNutritionist = mongoose.model('nutritionist', nutritionistSchema)

export default schemaNutritionist
