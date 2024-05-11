import { configEnviroment } from '../config/configEnviroment'

export default async function verifyService (token) {
  return await fetch(`${configEnviroment.URL_BACKEND}/auth/validate/${token}`)
    .then(response => response.json())
    .then(data => data)
}
