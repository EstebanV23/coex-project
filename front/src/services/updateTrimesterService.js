import { configEnviroment } from '../config/configEnviroment'

export default async function updateTrimesterService (data, token) {
  return await fetch(`${configEnviroment.URL_BACKEND}/trimesters/update`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
}
