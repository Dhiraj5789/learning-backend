const fs = require("fs");

function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-type", "html");
    res.write("<html><head><title>First Assignment</title></head><body>");
    res.write(
      "<h2>It's not who I am underneath, but what I do that defines me.</h2>"
    );
    res.write("<form action='/create-user' method='POST'>");
    res.write("<input name='Name' type='text' />");
    res.write('<button type="submit">Send</button>');
    res.write("</form>");
    res.write("</body></html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-type", "html");
    res.write("<html><head><title>Users</title></head><body>");
    res.write("<h3>The Batman Begins</h3>");
    res.write("<ul>");
    res.write("<li>Bruce Wayne</li>");
    res.write("<li>Alfred</li>");
    res.write("<li>James Gordon</li>");
    res.write("</ul>");
    res.write("</body></html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><title>Form Route</title></head><body>");
  res.write("<h1>You Seem Lost!! /</h1>");
  res.write("</body></html>");
  res.end();
}

module.exports = requestHandler;
