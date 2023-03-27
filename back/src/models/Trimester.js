import schemaTrimester from '../schemas/collectionSchema/trimestersSchema.js'
import Unit from './Unit.js'

class Trimester {
  name
  document
  createdAt = new Date()
  unit

  constructor ({ name, document, unit }) {
    this.name = name
    this.document = document
    this.unit = unit
  }

  async create () {
    const trimester = schemaTrimester(this.buildData())
    const newTrimester = await trimester.save()
    const { _id: id } = newTrimester
    await Unit.addTrimester(this.unit, id)
    return newTrimester
  }

  static async delete (trimesterId, unitId) {
    await Unit.deleteTrimesters(unitId, trimesterId)
    return await schemaTrimester.deleteOne({ _id: trimesterId })
  }

  static async deleteFromUnit (unitId) {
    await schemaTrimester.deleteMany({ unit: unitId })
  }

  static async update (id, data) {
    const trimester = await schemaTrimester.updateOne({ _id: id }, { $set: data })
    return trimester
  }

  static async getOne (id) {
    const trimester = await schemaTrimester.findOne({ _id: id })
    return trimester
  }

  buildData () {
    return {
      name: this.name,
      document: this.document,
      createdAt: this.createdAt,
      unit: this.unit
    }
  }
}

export default Trimester
