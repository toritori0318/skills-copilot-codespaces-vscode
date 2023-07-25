// Create web server
// 1. import http module
const http = require('http');
const fs = require('fs');

// 2. create web server
const server = http.createServer(function(req, res) {
  // 3. send response
  if (req.url === '/') {
    fs.readFile('./