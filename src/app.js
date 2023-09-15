const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3000);
// event loop keeps on running as long as there are listeners registered
