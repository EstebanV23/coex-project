import { configEnviroment } from '../config/configEnviroment'
import getNutritionistEmailService from './getNutritionistEmailService'

export const updateNutritionist = async (id, body, token) => {
  if (body.email !== body.emailOld) {
    const dataEmail = await getNutritionistEmailService({ email: body.email })
    if (!dataEmail.error) return
  }
  delete body.emailOld
  const response = await fetch(`${configEnviroment.URL_BACKEND}/auth/update-nutritionist/${id}`,
    {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  )
  const data = await response.json()

  return data
}
