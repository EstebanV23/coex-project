import { configEnviroment } from '../config/configEnviroment'

export default async function createUnitService (token, elements) {
  const response = await fetch(`${configEnviroment.URL_BACKEND}/units/create/`,
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`
      },
      body: JSON.stringify({ ...elements })
    })
  const data = await response.json()
  return data
}
