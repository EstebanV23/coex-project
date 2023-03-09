const buildResponse = {
  success: (res, status = 200, msg = 'Process success', data) => {
    res.status(status).json({
      msg,
      data
    })
  },
  failed: (res, status = 400, errorMessage = 'The process has error') => {
    res.status(status).json({
      error: errorMessage
    })
  },
  custom: (res, status, data) => {
    res.status(status).json(data)
  }
}

export default buildResponse
