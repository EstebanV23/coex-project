import schemaNutritionist from '../schemas/collectionSchema/nutritionistSchema.js'
import bcrypt from 'bcrypt'
import encryptPassword from '../helpers/encryptPassword.js'
import generateRandomAvatar from '../helpers/generateRandomAvatar.js'
import hiddenValuesDatabase from '../helpers/hiddenValuesDatabase.js'

class Nutritionist {
  name
  surname
  avatar
  email
  phone
  password
  isVerified
  createdAt
  verificationDate
  lastConnection
  parnet
  retriesVerify

  constructor ({
    name, surname, email,
    phone = '', password, isVerified = false, createdAt = new Date(),
    verificationDate = null, lastConnection = null, parnet = false, retriesVerify = 1
  }) {
    this.name = name
    this.surname = surname
    this.avatar = generateRandomAvatar(`${name}&${surname}`)
    this.email = email
    this.phone = phone
    this.password = password
    this.isVerified = isVerified
    this.createdAt = createdAt
    this.verificationDate = verificationDate
    this.lastConnection = lastConnection
    this.parnet = parnet
    this.retriesVerify = retriesVerify
  }

  async create () {
    const nutritionist = schemaNutritionist(await this.buildData())
    const newNutritionist = await nutritionist.save()
    return newNutritionist
  }

  static async getAll () {
    const nutritionists = await schemaNutritionist.find({}, hiddenValuesDatabase.nutritinist)
    return nutritionists
  }

  static async getByEmail (email) {
    const nutritionist = await schemaNutritionist.findOne({ email })
    return nutritionist
  }

  static async getOne (id) {
    const nutritionist = await schemaNutritionist.findOne({ _id: id })
    return nutritionist
  }

  static async getUnits (id) {
    const nutritionist = await schemaNutritionist.findOne({ _id: id }, hiddenValuesDatabase.nutritinist).populate('units').then(data => data.populate('units.trimesters'))
    return nutritionist
  }

  static async update (id, data) {
    if (data.password) data.password = await encryptPassword(data.password)
    const newNutritionist = await schemaNutritionist.updateOne({ _id: id }, { $set: data })
    return newNutritionist
  }

  static async verifyUnitFromNutritionist (nutritionistId, unitId) {
    const nutritinist = await schemaNutritionist.findOne({ _id: nutritionistId, units: { $in: [unitId] } }, hiddenValuesDatabase.nutritinist)
    return nutritinist
  }

  static async updateByEmail (email, data) {
    if (data.password) data.password = await encryptPassword(data.password)
    const newNutritionist = await schemaNutritionist.updateOne({ email }, { $set: data })
    return newNutritionist
  }

  static deleteUnit (nutritinistId, unitId) {
    return schemaNutritionist.updateOne({ _id: nutritinistId }, { $pull: { units: unitId } })
  }

  static async addUnit (nutritinistId, unitId) {
    const nutritinist = await this.getOne(nutritinistId)
    nutritinist.units.push(unitId)
    const { units } = nutritinist
    await this.update(nutritinistId, { units })
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
      avatar: this.avatar,
      email: this.email,
      phone: this.phone,
      password: await encryptPassword(this.password),
      isVerified: this.isVerified,
      createdAt: this.createdAt,
      verificationDate: this.verificationDate,
      lastConnection: this.lastConnection,
      parnet: this.parnet,
      retriesVerify: this.retriesVerify
    }
  }
}

export default Nutritionist
