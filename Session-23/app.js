// importing the express package
var express = require("express");

//import mongoose package
var mongoose = require("mongoose");

//Initialise the Express Package
var app = express();

//Database URL
var dburl = "mongodb://localhost:27017/todaysuserdb";

//Connecting With Mongodb Server and Database
mongoose
  .connect(dburl)
  .then(() => {
    console.log("Connected Successfully With Mongodb Server and Database");
  })
  .catch((error) => {
    console.log("Failed to connect With Server and Database");
    console.log(error);
  });

// Create the Schema (Creating the Structure of the Document)
var UserSchema = new mongoose.Schema({
  username: String,
  city: String,
});

//Create the Model
var User = new mongoose.model("User", UserSchema);

//create get end point
app.get("/user", async (req, res) => {
  // Add the code to fetch data from the database and Collection
  var userdata = await User.find({});

  res.send({
    ok: true,
    data: userdata,
  });
}); //http://localhost:5050/user

app.listen("5050", () => {
  console.log("Express Server is Started on 5050 Port Number");
});
