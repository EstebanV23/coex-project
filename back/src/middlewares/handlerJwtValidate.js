import { verifyToken } from '../config/JWT.js'

function handlerJwtVerify (property) {
  return (req, res, next) => {
    try {
      const { token } = req[property]
      const decoded = verifyToken(token)
      req.user = decoded
      next()
    } catch (error) {
      error.message = 'Expired or invalid token'
      error.status = 401
      next(error)
    }
  }
}

export default handlerJwtVerify
