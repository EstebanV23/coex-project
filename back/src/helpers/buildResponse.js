const response = {
  success: (res, data, msg = 'Process success', status = 200) => {
    res.status(status).json({
      msg,
      data
    })
  },
  failed: (res, errorMessage = 'The process has error', status = 400) => {
    res.status(status).json({
      error: errorMessage
    })
  },
  custom: (res, data, status) => {
    res.status(status).json(data)
  }
}

export default response
