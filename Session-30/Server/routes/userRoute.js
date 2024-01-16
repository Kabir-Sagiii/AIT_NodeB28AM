var express = require("express");
var User = require("../model/userModel");
var jwt = require("jsonwebtoken");
var secrertKey = "myusersecret123456";

var route = express.Router();

route.get("/getusers", async (req, res) => {
  console.log(req.headers.authorization);
  var { authorization } = req.headers;
  var tokenValue = authorization.split(" ")[1];

  var valid = jwt.verify(tokenValue, secrertKey);
  console.log(valid);
  if (valid) {
    var allusers = await User.find();
    res.send({
      ok: true,
      results: allusers,
    });
  } else {
    res.send({
      ok: false,
      error: "Invalid Token",
    });
  }
});

route.post("/newuser", async (req, res) => {
  var newuser = await User.create(req.body);

  res.send({
    ok: true,
    data: "Inserted Successfully",
  });
});

route.post("/login", async (req, res) => {
  var userdata, token;
  userdata = await User.find(req.body);

  if (userdata.length > 0) {
    token = jwt.sign({ id: userdata._id }, secrertKey);
    res.send({
      ok: true,
      token,
      result: "User Exist",
    });
  } else {
    res.send({
      ok: false,
      error: "User Does not exist",
    });
  }
});

module.exports = route;
