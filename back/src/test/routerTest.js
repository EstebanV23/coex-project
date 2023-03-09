import express from 'express'
import { generateToken, verifyToken } from '../config/JWT.js'
import sendMail from '../config/mailer.js'

const testRouter = express.Router()

testRouter
  .post('/', (req, res) => {
    try {
      const token = generateToken(req.body)
      sendMail(token, req.body.id)
      res.json({ token, msg: 'Correct create' })
    } catch (error) {
      res.json({ error: error.message })
    }
  })
  .get('/validate/:token', (req, res) => {
    try {
      const data = verifyToken(req.params.token)
      res.json({ data })
    } catch (error) {
      res.json({ error: error.message })
    }
  })
export default testRouter
