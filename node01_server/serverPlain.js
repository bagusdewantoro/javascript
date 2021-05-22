const http = require('http');

const server = http.createServer(function (req, res) {
    res.end("Hai, selamat datang di nodejs");
});

server.listen(8000);

console.log("server berhasil running pada http://localhost:8000");
