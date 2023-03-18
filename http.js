const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to home page');
  } else if (req.url === '/about') {
    res.end('welcome to about');
  } else
    res.end(`<h1> oops! </h1>
  <a href = "/"> go back </a>`);
});

server.listen(5000);
