function handlerCleanData (req, _, next) {
  req.body.email = req.body.email.toLowerCase()
  next()
}

export default handlerCleanData
