import { configEnviroment } from '../config/configEnviroment'

export default async function againVerifyService (token) {
  return await fetch(`${configEnviroment.URL_BACKEND}/auth/again-verify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
}
