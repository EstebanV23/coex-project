import { configEnviroment } from '../config/configEnviroment'

const URL = `${configEnviroment.URL_BACKEND}/auth/signin`

export default async function loginService ({ email, password }) {
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  if (!res.ok) throw new Error('Email o contraseña incorrecta')
  const data = await res.json()
  const { data: user } = data
  return user
}
