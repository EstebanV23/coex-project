import { verifyToken } from '../config/JWT.js';

function handlerAuthorizationJWT(req, _, next) {
  try {
    const bearerHeader = req.get('Authorization');
    if (!bearerHeader || !bearerHeader.toLowerCase().startsWith('bearer'))
      throw new Error();

    const token = bearerHeader.split(' ')[1]
    const userData = verifyToken(token)
    req.user = userData
    next()

  } catch (error) {
    error.status = 401;
    error.message = 'Unauthorized';
    next(error);
  }
}

export default handlerAuthorizationJWT;
