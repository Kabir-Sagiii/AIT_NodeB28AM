var http = require("http");

var server = http.createServer(function (req, res) {
  //   console.log("Request is Received");
  res.end("This is my First Response, and I am able string to client");
}); // http://localhost:9090

server.listen(9090, () => {
  console.log("Server Started");
});
