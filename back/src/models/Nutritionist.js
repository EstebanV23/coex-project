import schemaNutritionist from '../schemas/collectionSchema/nutritionistSchema'

class Nutritionist {
  name
  surname
  email
  dni
  phone
  password
  verify
  createdAt
  verificationDate
  lastConnection

  constructor ({
    name, surname, email,
    dni, phone = null, password,
    verify = false, createdAt = new Date(), verificationDate = null,
    lastConnection = null
  }) {
    this.name = name
    this.surname = surname
    this.email = email
    this.dni = dni
    this.phone = phone
    this.password = password
    this.verify = verify
    this.createdAt = createdAt
    this.verificationDate = verificationDate
    this.lastConnection = lastConnection
  }

  async create () {
    const nutritionist = schemaNutritionist(this.buildData())
    await nutritionist.save()
    return nutritionist
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
    const newNutritionist = await schemaNutritionist.updateOne({ _id: id }, { $set: data })
    return newNutritionist
  }

  static async delete (id) {
    await schemaNutritionist.deleteOne({ _id: id })
  }

  buildData () {
    return {
      name: this.name,
      surname: this.surname,
      email: this.email,
      dni: this.dni,
      phone: this.phone,
      password: this.password,
      verify: this.verify,
      createdAt: this.createdAt,
      verificationDate: this.verificationDate,
      lastConnection: this.lastConnection
    }
  }
}

export default Nutritionist
