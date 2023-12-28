var express = require("express");
var fs = require("fs");

var app = express();

app.get("/getdata", (req, res) => {
  // Implement the logic to read content from the file and send response back to client
  fs.readFile("Home.html", "utf-8", (err, data) => {
    if (err) {
      res.send({
        ok: false,
        error: "Failed to read data from the file",
      });
    } else {
      res.send(data);
    }
  });
}); //http://localhost:5050/getdata

app.post("/newdata", (req, res) => {});

app.put("/updatedata", (req, res) => {});

app.delete("/deletedata", (req, res) => {});

app.listen(5050, () => {
  console.log("Server is started");
});
