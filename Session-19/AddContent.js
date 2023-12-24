var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  fs.appendFile("docs.txt", "This is first Content in the NodeJS", (err) => {
    if (err) {
      res.end("Ther is error while adding the content in the File");
    } else {
      res.end("Successfully added the content in the file");
    }
  });

  //http://localhost:4040
});

server.listen(4040, () => {
  console.log("Server started on the Port 4040");
});
