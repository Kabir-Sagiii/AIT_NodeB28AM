var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  fs.unlink("index.html", (err) => {
    if (err) {
      res.end(
        JSON.stringify({
          OK: false,
          message: "error while deleting the file",
        })
      );
    } else {
      res.end(
        JSON.stringify({
          OK: true,
          message: "Deleted the File",
        })
      );
    }
  });
});

server.listen(4040, () => {
  console.log("Server started on the Port 4040");
});
