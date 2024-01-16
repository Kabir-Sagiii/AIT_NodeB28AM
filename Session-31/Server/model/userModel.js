var mongoose = require("mongoose");

var UserScehma = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username Field is Mandatory"],
    unique: [true, "username already exist"],
  },
  city: String,
  password: String,
  phone: Number,

  email: String,
});

var User = new mongoose.model("User", UserScehma);

module.exports = User;
