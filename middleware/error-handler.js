const errorHandlerMiddleware = async (err, req, res, next) => {
    console.log(err)
    return res.status(500).json({ msg: 'Something went wrong, please try again' })
  }
  
  module.exports = errorHandlerMiddleware

// we did not use next because we don't need to with async-errors library