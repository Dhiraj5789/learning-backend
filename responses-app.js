const http = require("http");

const server = http.createServer((req, res) => {
  // Event Listener
  res.setHeader("Content-Type", "text/html");
  res.write(
    "<html><head><title>My first page</title></head><body><h1>My first Node.js application</h1></body></html>"
  ); // can be written in multiple lines
  res.end();
  // process.exit(); // stops event loop and quits server
});

server.listen(3000);
// event loop keeps on running as long as there are listeners registered
