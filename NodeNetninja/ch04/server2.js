const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');
  res.write('<head><style>h3 {color: blue;}</style><head>');
  res.write('<h3>Hi Mann.. </h3>');
  res.write('<p>paragraph</p>');
  res.end()
});

server.listen(3000, 'localhost', () => {
  console.log('listening for request');
})
