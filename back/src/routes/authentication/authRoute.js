import express from 'express'

const authRouter = express.Router()

authRouter
  .get('/signin', (req, res) => {
  // TODO: Se hará el endpoint para autenticación del signin
    res.send('Hello from authRouter')
  })
  .get('/signup', (req, res) => {
  // TODO: Se hará el endpoint para autenticación del signup
    res.send('Hello from authRouter')
  })
export default authRouter
