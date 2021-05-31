const http = require('http');
const os = require('os');

console.log("Http server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("Poc 01- You've hit " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(80);

