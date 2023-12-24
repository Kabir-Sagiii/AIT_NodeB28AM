var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  fs.open("home.html", "w", (err) => {
    if (err) {
      res.end("There is Some Error While Creating File");
    } else {
      //   res.end("File Created Successfully");
      res.end(
        JSON.stringify({
          status: true,
          message: "file Created successfully",
          data: [{}, {}],
        })
      );
    }
  });
  //http://localhost:4040
});

server.listen(4040, () => {
  console.log("Server started on the Port 4040");
});
