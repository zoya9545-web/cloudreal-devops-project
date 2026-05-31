const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('CloudBridge DevOps Project Running Successfully!\n');
});

server.listen(3002, () => {
    console.log('Server running on port 3000');
});
