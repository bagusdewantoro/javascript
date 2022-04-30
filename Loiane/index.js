// // 1. server with express
// const express = require('express');
// const app = express();
// app.listen();
// const stack = require('./stack');

// // 2. server with core module
// // 2.a
// const http = require('http');
// const server = http.createServer();
// server.listen();

// 2.b
require('http')
  .createServer()
  .listen();


// const stack = require('./Stack');
// const numberConverter = require('./numberConverter');
// const queue = require('./Queue');
const linkedList = require('./LinkedList');
