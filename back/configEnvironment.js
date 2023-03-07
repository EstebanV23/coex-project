import { config } from 'dotenv'
config()

// Configuración de variables de entorno
export default {
  port: process.env.PORT || 3000,
  secretKey: process.env.SECRET_KEY
}
