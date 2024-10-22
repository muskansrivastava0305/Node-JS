const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  // console.log("New request recive");
  // console.log(req);
const log = `${Date.now()}: New Req Recieve\n`;
fs.appendFile("log.txt", log, (err , data) => {
    res.end("Hello from Server again");
});
  
});

myServer.listen(8001, () => console.log("Server Started"));
