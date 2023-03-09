// Importacines de dependencias
import express from 'express'
import cors from 'cors'
import environmentVars from './src/config/configEnvironment.js'
import authRouter from './src/routes/authentication/authRoute.js'
import mongoDb from './src/database/mongo.js'
import testRouter from './src/test/routerTest.js'
import handlerException from './src/middlewares/handlerException.js'

// Inicialización del proyecto
const app = express()

// Uso de middlewares generales
app.use(cors())
app.use(express.json())

// Conexion a la base de datos
mongoDb()

// Rutas para los endpoints
app.use('/auth', authRouter)
app.use('/test', testRouter)
app.use(handlerException)

// Configuración del puerto para levantar el servidor
app.listen(environmentVars.port, () => {
  console.log(`Server running on port http://localhost:${environmentVars.port}`)
})
