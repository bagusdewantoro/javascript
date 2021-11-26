const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('pesan', (msg) => {
    console.log(`Pesan baru: ${msg}`);
    io.emit('pesan', msg);
  });
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
