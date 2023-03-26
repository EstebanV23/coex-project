import buildResponse from '../helpers/buildResponse.js'

function handlerException (err, _, res, next) {
  const { message, status } = err
  console.log(err)
  buildResponse.failed(res, status, message)
}

export default handlerException
