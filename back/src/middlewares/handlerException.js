import buildResponse from '../helpers/buildResponse'

function handlerException (error, _, res, next) {
  const { message, status } = error
  buildResponse.failed(res, status, message)
}

export default handlerException
