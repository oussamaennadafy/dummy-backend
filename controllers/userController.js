const AppError = require('../utils/appError')
const User = require('./../models/userModel.js')

const login = async (req, res, next) =>
{
 const { email, password } = req.body
 const user = await User.findOne({ email, password })
 if (user) {
  res.status(200).json({
   status: "success",
   body: {
    user
   }
  })
 } else {
  next(new AppError('user not found', 404))
 }
}


module.exports = {
 login
}