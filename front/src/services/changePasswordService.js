import { configEnviroment } from '../config/configEnviroment'

export default async function changePasswordService (oldPassword, password, email, token) {
  return await fetch(`${configEnviroment.URL_BACKEND}/auth/change-password`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ oldPassword, password, email })
  })
    .then(response => response.json())
    .then(data => data)
}
