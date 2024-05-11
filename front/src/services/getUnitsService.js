import { configEnviroment } from '../config/configEnviroment'

export default async function getUnitsService (token) {
  const response = await fetch(`${configEnviroment.URL_BACKEND}/auth/get-units/${token}`)
  const data = await response.json()
  return data
}
