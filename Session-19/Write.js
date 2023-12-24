var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  fs.writeFile("Services.html", "<h2>Hello</h2> <p>------</p>", (err) => {
    if (err) {
      res.end(
        JSON.stringify({
          ok: false,
          result: "Failed to create and add content in the file",
        })
      );
    } else {
      res.end(
        JSON.stringify({
          ok: true,
          result: "Created the File",
        })
      );
    }
  });
});

server.listen(4040, () => {
  console.log("Server started on the Port 4040");
});
