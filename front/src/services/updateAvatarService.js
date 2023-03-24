import { configEnviroment } from '../config/configEnviroment'

export default async function updateAvatarService (avatar, token) {
  const response = await fetch(`${configEnviroment.URL_BACKEND}/auth/update-avatar`,
    {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ avatar })
    }
  )
  const data = await response.json()

  return data
}
