import buildResponse from '../helpers/buildResponse.js'

function handlerException (err, _, res) {
  const { message, status } = err
  buildResponse.failed(res, status, message)
}

export default handlerException
