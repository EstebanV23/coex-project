import jwt from 'jsonwebtoken'
import configEnvironment from './configEnvironment.js'

function generateToken (payload, expiresIn = '1h') {
  return jwt.sign(payload, configEnvironment.secretKey, { expiresIn,  })
}

function verifyToken (token) {
  return jwt.verify(token, configEnvironment.secretKey)
}

export { verifyToken, generateToken }
