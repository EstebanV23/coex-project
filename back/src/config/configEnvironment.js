import { config } from 'dotenv'
config()

// Configuración de variables de entorno
export default {
  port: process.env.PORT || 3000,
  secretKey: process.env.SECRET_KEY,
  mongoUri: process.env.MONGO_URI,
  mailUser: process.env.MAIL_USER,
  mailPass: process.env.MAIL_PASS,
  uriApp: process.env.URI_APP || `http://localhost:${process.env.PORT}`,
  uriAppFront: process.env.URI_APP_FRONT || `http://localhost:${process.env.PORT_FRONT}`,
  cloudName: process.env.CLOUD_NAME,
  cloudApiKey: process.env.CLOUD_API_KEY,
  cloudApiSecret: process.env.CLOUD_API_SECRET
}
