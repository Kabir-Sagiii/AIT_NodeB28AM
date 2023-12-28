var http = require("http");
var fs = require("fs");

var port = 2020;

var server = http.createServer(function (req, res) {
  if (req.url === "/api/home") {
    fs.readFile("Home.html", "utf-8", (err, data) => {
      if (err) {
        res.end(
          JSON.stringify({
            ok: false,
            error: "Failed to read file from home.html",
          })
        );
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/api/service") {
    fs.readFile("Service.html", "utf-8", (err, data) => {
      if (err) {
        res.end(
          JSON.stringify({
            ok: false,
            error: "Failed to read file from Service.html",
          })
        );
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/api/support") {
    fs.readFile("Support.html", "utf-8", (err, data) => {
      if (err) {
        res.end(
          JSON.stringify({
            ok: false,
            error: "Failed to read file from Support.html",
          })
        );
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/api/profile") {
    fs.readFile("Profile.html", "utf-8", (err, data) => {
      if (err) {
        res.end(
          JSON.stringify({
            ok: false,
            error: "Failed to read file from Profile.html",
          })
        );
      } else {
        res.end(data);
      }
    });
  }
}); //http://localhost:2020

server.listen(port, () => {
  console.log("Server Started on Port number 2020");
});
