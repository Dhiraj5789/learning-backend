const http = require("http");

const server = http.createServer((req, res) => {
  // Event Listener
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Form Route</title></head><body>");
    res.write('<form action="/message" method="POST">');
    res.write('<input type="text" name="message" />');
    res.write('<button type="submit">Send</button>');
    res.write("</form>");
    res.write("</body></html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><title>Form Route</title></head><body>");
  res.write("<h1>Form Route is /</h1>");
  res.write("</form>");
  res.write("</body></html>");
  res.end();
  // process.exit(); // stops event loop and quits server
});

server.listen(3000);
// event loop keeps on running as long as there are listeners registered