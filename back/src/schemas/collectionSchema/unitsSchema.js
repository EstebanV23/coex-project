import mongoose, { Schema } from 'mongoose'

const unitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  zoneCenter: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: false
  },
  nutritionist: {
    type: Schema.Types.ObjectId,
    ref: 'nutritionists'
  },
  trimesters: [{
    type: Schema.Types.ObjectId,
    ref: 'trimesters'
  }]
})

const schemaUnit = mongoose.model('units', unitsSchema)

export default schemaUnit
