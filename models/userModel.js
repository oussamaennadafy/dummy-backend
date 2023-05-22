const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
 firstName: {
  type: String,
  require: [true, "please add your first name"]
 },
 lastName: {
  type: String,
  require: [true, "please add your last name"]
 },
 email: {
  type: String,
  require: [true, "please add your email"]
 },
 password: {
  type: String,
  require: [true, "please add your password"]
 },
}, {
 timestamps: true
})


module.exports = new mongoose.model("user", userSchema)