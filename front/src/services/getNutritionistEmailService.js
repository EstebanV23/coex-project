import { configEnviroment } from '../config/configEnviroment'

export default async function getNutritionistEmailService ({ email }) {
  const responseEmail = await fetch(`${configEnviroment.URL_BACKEND}/auth/nutritionist-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  }, AbortController.signal)

  return responseEmail.json()
}
