var express = require("express");
var jwt = require("jsonwebtoken");
var app = express();

app.get("/jwt", (req, res) => {
  var token = jwt.sign({ id: 101 }, "abcd");
  console.log(token);
  res.send({
    ok: true,
    token,
  });
});

app.post("/verify", (req, res) => {
  console.log(req.headers);
  var tokendata = req.headers.authorization;
  var token = tokendata.split(" ")[1];
  var valid = jwt.verify(token, "abcd");
  console.log(valid);

  res.send({
    data: "Working",
  });
});

app.listen(3030, () => {
  console.log("Server started");
});
