import { configEnviroment } from '../config/configEnviroment'
export default async function getValorationUniqueService (data) {
  const { peso, talla, genero } = data
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      peso,
      talla,
      genero
    })
  }
  const response = await fetch(`${configEnviroment.URL_PYTHON}/unico`, options)
  const dataResponse = await response.json()
  return dataResponse
}
