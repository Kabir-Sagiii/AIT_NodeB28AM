var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  fs.readFile("Home.html", "utf-8", (err, data) => {
    if (err) {
      res.end(
        JSON.stringify({
          ok: false,
          message: "Failed to read the Content",
        })
      );
    } else {
      res.end(data);
    }
  });
});

server.listen(4040, () => {
  console.log("Server started on the Port 4040");
});
