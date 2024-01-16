var express = require("express");

var cors = require("cors");
var mongoose = require("mongoose");
var userRoute = require("./routes/userRoute");

var dburl = "mongodb://localhost:27017/ecommercedb";

var app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.send("<h2>Working</h2>");
});

app.listen(5050, () => {
  mongoose
    .connect(dburl)
    .then(() => {
      console.log("Server started and Connected with database");
    })
    .catch((error) => {
      console.log(error);
      console.log("Failed to connect with database");
    });
});
