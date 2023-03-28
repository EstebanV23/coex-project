import { configEnviroment } from '../config/configEnviroment'

export default async function getTrimesterService (data, token) {
  return await fetch(`${configEnviroment.URL_BACKEND}/trimesters/get`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
}
