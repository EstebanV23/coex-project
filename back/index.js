// Importacines de dependencias
import express from 'express'
import cors from 'cors'
import authRouter from './src/routes/authentication/authRoute.js'
import mongoDb from './src/database/mongo.js'
import handlerException from './src/middlewares/handlerException.js'
import configEnvironment from './src/config/configEnvironment.js'
import unitsRouter from './src/routes/units/unitsRoute.js'
import trimestersRouter from './src/routes/trimesters/trimestersRoute.js'

// Inicialización del proyecto
const app = express()

// Uso de middlewares generales
app.use(cors())
app.use(express.json({ limit: '5mb' }))

// Conexion a la base de datos
mongoDb()

// Rutas para los endpoints
app.use('/auth', authRouter)
app.use('/units', unitsRouter)
app.use('/trimesters', trimestersRouter)

app.use(handlerException)
app.use((_, res) => {
  res.status(405).send('<h2>The server correct!</h2>')
})

// Configuración del puerto para levantar el servidor
app.listen(configEnvironment.port, () => {
  console.log(`Server running on ${configEnvironment.uriApp}`)
})
