var express = require("express");
var fs = require("fs");

var app = express();

app.get("/first", (req, res) => {
  res.send("First Express Response");
}); //endpoint // http://localhost:6060/first

app.get("/home", (req, res) => {
  fs.readFile("Home.html", "utf-8", (err, data) => {
    res.send(data);
  });
}); // http://localhost:6060/home

app.get("/profile", (req, res) => {
  fs.readFile("Profile.html", "utf-8", (err, data) => {
    res.send(data);
  });
}); // http://localhost:6060/profile

app.get("/json", (req, res) => {
  res.send({ name: "Sagar", city: "Mumbai" });
}); // http://localhost:6060/json

app.listen(6060, () => {
  console.log("Server started");
});
