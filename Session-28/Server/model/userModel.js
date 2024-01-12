var mongoose = require("mongoose");

var UserScehma = new mongoose.Schema({
  name: String,
  city: String,
  isMarried: Boolean,
  phone: Number,
  gender: String,
  email: String,
});

var User = new mongoose.model("User", UserScehma);

module.exports = User;
