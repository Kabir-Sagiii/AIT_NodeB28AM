var express = require("express");
var User = require("../model/userModel");

var route = express.Router();

route.get("/getusers", async (req, res) => {
  var allusers = await User.find();

  res.send({
    ok: true,
    results: allusers,
  });
});

route.post("/newuser", async (req, res) => {
  var newuser = await User.create(req.body);

  res.send({
    ok: true,
    data: "Inserted Successfully",
  });
});

module.exports = route;
