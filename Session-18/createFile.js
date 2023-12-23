var http = require("http");
var fs = require("fs");

var myserver = http.createServer(function (req, res) {
  fs.open("home.html", "w", function (err) {
    if (err) {
      res.end("Error while creating the file");
    } else {
      res.end("successfuly created the file");
    }
  });
}); //http://localhost:7070

myserver.listen(8070, () => {
  console.log("Server Started");
});
