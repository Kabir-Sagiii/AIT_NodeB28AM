var mongoose = require("mongoose");

var UserScehma = new mongoose.Schema({
  username: String,
  city: String,
  password: String,
  phone: Number,

  email: String,
});

var User = new mongoose.model("User", UserScehma);

module.exports = User;
