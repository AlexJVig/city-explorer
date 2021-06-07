const http = require('http');
var resources = require('./resources');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.write('City Explorer server operational.');
      res.end();
      break;
    case '/api/getCities':
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(resources.getCities()));
      break;
  }
});

server.listen(port, hostname);