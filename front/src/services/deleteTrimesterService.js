import { configEnviroment } from '../config/configEnviroment'

export default async function deleteTrimesterService (data, token) {
  return await fetch(`${configEnviroment.URL_BACKEND}/trimesters/delete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
}
