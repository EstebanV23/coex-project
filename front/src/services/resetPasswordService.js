import { configEnviroment } from '../config/configEnviroment'

export default async function resetPasswordService (password, token) {
  return await fetch(`${configEnviroment.URL_BACKEND}/auth/forgot-password/${token}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password })
  })
    .then((res) => res.json())
    .then((data) => data)
}
