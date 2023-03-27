import { configEnviroment } from '../config/configEnviroment'

export default async function tokenValidateService (token) {
  return await fetch(`${configEnviroment.URL_BACKEND}/auth/validate-token/${token}`)
    .then(response => response.json())
}
