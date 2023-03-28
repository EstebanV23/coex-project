import schemaUnit from '../schemas/collectionSchema/unitsSchema.js'
import Nutritionist from './Nutritionist.js'

class Unit {
  name
  zoneCenter
  createdAt = new Date()
  nutritionist
  trimesters = []

  constructor ({ name, zoneCenter, nutritionist }) {
    this.name = name
    this.zoneCenter = zoneCenter
    this.nutritionist = nutritionist
  }

  async create () {
    const unit = schemaUnit(this.buildData())
    const newUnit = await unit.save()
    const { _id: id } = newUnit
    await Nutritionist.addUnit(this.nutritionist, id)
    return newUnit
  }

  static async delete (nutritionistId, unitId) {
    await Nutritionist.deleteUnit(nutritionistId, unitId)
    return await schemaUnit.deleteOne({ _id: unitId })
  }

  static deleteTrimesters (unitId, trimesterId) {
    return schemaUnit.updateOne({ _id: unitId }, { $pull: { trimesters: trimesterId } })
  }

  static async update (id, data) {
    const unit = await schemaUnit.updateOne({ _id: id }, { $set: data })
    return unit
  }

  static async getOne (id) {
    const unit = await schemaUnit.findOne({ _id: id })
    return unit
  }

  static async addTrimester (unitId, trimesterId) {
    const unit = await this.getOne(unitId)
    unit.trimesters.push(trimesterId)
    const { trimesters } = unit
    await this.update(unitId, { trimesters })
  }

  buildData () {
    return {
      name: this.name,
      zoneCenter: this.zoneCenter,
      createdAt: this.createdAt,
      trimesters: this.trimesters,
      nutritionist: this.nutritionist
    }
  }
}

export default Unit
