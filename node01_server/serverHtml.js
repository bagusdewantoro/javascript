const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Halo semua, <i>ini miring</i>, dan <b>ini tebal</b>')
  res.end();
}).listen(8000);

console.log("Server running di http://localhost:8000 dengan merespon html")
