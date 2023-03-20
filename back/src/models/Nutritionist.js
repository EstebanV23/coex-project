import schemaNutritionist from '../schemas/collectionSchema/nutritionistSchema.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import encryptPassword from '../helpers/encryptPassword.js'

class Nutritionist {
  name
  surname
  email
  phone
  password
  isVerified
  createdAt
  verificationDate
  lastConnection

  constructor ({
    name, surname, email,
    phone = '', password, isVerified = false, createdAt = new Date(),
    verificationDate = null, lastConnection = null
  }) {
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.password = password
    this.isVerified = isVerified
    this.createdAt = createdAt
    this.verificationDate = verificationDate
    this.lastConnection = lastConnection
  }

  async create () {
    const nutritionist = schemaNutritionist(await this.buildData())
    const newNutritionist = await nutritionist.save()
    return newNutritionist
  }

  static async getAll () {
    const nutritionists = await schemaNutritionist.find()
    return nutritionists
  }

  static async getByEmail (email) {
    const nutritionist = await schemaNutritionist.findOne({ email })
    return nutritionist
  }

  static async update (id, data) {
    if (data.password) data.password = await encryptPassword(data.password)
    const newNutritionist = await schemaNutritionist.updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: data })
    return newNutritionist
  }

  static async updateByEmail (email, data) {
    if (data.password) data.password = await encryptPassword(data.password)
    const newNutritionist = await schemaNutritionist.updateOne({ email }, { $set: data })
    return newNutritionist
  }

  static async delete (id) {
    await schemaNutritionist.deleteOne({ _id: id })
  }

  static async login (email, password) {
    const nutritionist = await this.getByEmail(email)
    if (!nutritionist) return
    const isPasswordCorrect = await bcrypt.compare(password, nutritionist.password)
    if (isPasswordCorrect) {
      delete nutritionist.password
      return nutritionist
    }
  }

  async buildData () {
    return {
      name: this.name,
      surname: this.surname,
      email: this.email,
      phone: this.phone,
      password: await encryptPassword(this.password),
      isVerified: this.isVerified,
      createdAt: this.createdAt,
      verificationDate: this.verificationDate,
      lastConnection: this.lastConnection
    }
  }
}

export default Nutritionist
