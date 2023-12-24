var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  fs.rename("home.html", "index.html", (err) => {
    if (err) {
      res.end("Failed to Rename the file");
    } else {
      res.end("Successfully Renamed the File");
    }
  });
});

server.listen(4040, () => {
  console.log("Server started on the Port 4040");
});
