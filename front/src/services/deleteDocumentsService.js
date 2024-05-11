import { configEnviroment } from '../config/configEnviroment'

export default async function deleteDocumentsService (token) {
  const options = {
    method: 'DELETE'
  }
  const response = await fetch(`${configEnviroment.URL_PYTHON}/multi_delete/${token}`, options)
  const data = await response.json()
  return data
}
