import mongoose, { Schema } from 'mongoose'

const nutritionistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isVerified: {
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
  },
  parnet: {
    type: Boolean,
    required: false
  },
  retriesVerify: {
    type: Number,
    required: false
  },
  units: [{
    type: Schema.Types.ObjectId,
    ref: 'units'
  }]
})

const schemaNutritionist = mongoose.model('nutritionist', nutritionistSchema)

export default schemaNutritionist
