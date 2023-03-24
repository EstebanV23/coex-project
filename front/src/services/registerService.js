import { configEnviroment } from '../config/configEnviroment'
import getNutritionistEmailService from './getNutritionistEmailService'

export default async function registerService (body) {
  const dataEmail = await getNutritionistEmailService({ email: body.email })
  if (!(Object.values(dataEmail.data).length === 0)) return

  const response = await fetch(`${configEnviroment.URL_BACKEND}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  const data = await response.json()
  return data
}
