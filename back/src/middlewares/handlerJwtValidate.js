import { verifyToken } from '../config/JWT.js'

function handlerJwtVerify (property) {
  return (req, res, next) => {
    try {
      const { token } = req[property]
      const decoded = verifyToken(token)
      req.user = decoded
      next()
    } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' })
    }
  }
}

export default handlerJwtVerify
