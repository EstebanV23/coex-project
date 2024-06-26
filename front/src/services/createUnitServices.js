import { configEnviroment } from '../config/configEnviroment'

export default async function createUnitService (elements, token) {
  const response = await fetch(`${configEnviroment.URL_BACKEND}/units/create/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`
    },
    body: JSON.stringify({ ...elements })
  })
    .then(response => response.json())
  return response
}
