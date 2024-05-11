import mongoose from 'mongoose'
import configEnvironment from '../config/configEnvironment.js'

async function mongoDb () {
  try {
    await mongoose.connect(configEnvironment.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Database connected')
  } catch (error) {
    console.log(error.message)
  }
}

export default mongoDb
