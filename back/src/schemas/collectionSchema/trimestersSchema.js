import mongoose, { Schema } from 'mongoose'

const trimestersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  document: {
    type: Object,
    required: true
  },
  createdAt: {
    type: Date,
    required: false
  },
  unit: {
    type: Schema.Types.ObjectId,
    ref: 'units'
  }
})

const schemaTrimester = mongoose.model('trimesters', trimestersSchema)
export default schemaTrimester
