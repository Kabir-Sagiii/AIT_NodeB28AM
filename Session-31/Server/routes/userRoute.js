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
  try {
    var userdata, token;
    if (req.body.username.length > 0) {
      if (req.body.password.length > 0) {
        userdata = await User.find(req.body);
      } else {
        throw Error("Password is Empty");
      }
    } else {
      throw Error("Username is Empty");
    }

    if (userdata.length > 0) {
      token = jwt.sign({ id: userdata._id }, secrertKey);
      res.send({
        ok: true,
        token,
        result: userdata,
      });
    } else {
      throw Error("User Does not Exit");
    }
  } catch (error) {
    res.send({
      ok: false,
      error: error.message,
    });
  }
});

module.exports = route;
