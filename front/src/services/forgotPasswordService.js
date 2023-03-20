import { configEnviroment } from '../config/configEnviroment'

export default async function forgotPasswordService (email) {
  return await fetch(`${configEnviroment.URL_BACKEND}/auth/forgot-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
    .then((res) => res.json())
    .then((data) => data)
}
