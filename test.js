const http = require('http');

var host = '127.0.0.1',
    port = 1992,
    server = http.createServer();
console.log(send);
server.on('request', (req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("I am using type module in package.json file in this application.");
});

server.listen(port, () => console.log(
    'Listening to server ${port}. Connection has been established.'));