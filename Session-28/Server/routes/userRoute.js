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

route.post();

route.put();

route.delete();

module.exports = route;
