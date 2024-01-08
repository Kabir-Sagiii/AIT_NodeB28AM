var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");

var app = express();
var port = 4040;
var dburl = "mongodb://localhost:27017/todaysuserdb";

app.use(cors());

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/todaysuserdb")
  .then(() => {
    console.log("Connected With Database");
  })
  .catch((error) => {
    console.log("Failed to Connect with Database");
  });

var UserSchema = new mongoose.Schema({
  username: String,
  city: String,
});

var User = new mongoose.model("User", UserSchema);

app.get("/", async (req, res) => {
  var data = await User.find();
  res.send({
    ok: true,
    NoOfUsers: data.length,
    results: data,
  });
});

app.post("/newdata", async (req, res) => {
  //Adding new Data
  var newuser = new User(req.body);

  var data = await newuser.save();

  res.send({
    ok: true,
    result: "Inserted successfully",
  });
});

app.listen(port, () => {
  console.log("Server started on Port Number : ", port);
});
