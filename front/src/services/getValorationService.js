import { configEnviroment } from '../config/configEnviroment'

export default async function getValorationService (token, fileData) {
  const f = new FormData()
  f.append('file', fileData[0])
  const options = {
    method: 'POST',
    body: f
  }
  const response = await fetch(`${configEnviroment.URL_PYTHON}/multi/${token}`, options)
  const data = await response.json()
  return data
}
