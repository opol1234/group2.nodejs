var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello I am Patcharaporn Thongrong (5711404871)!');
}).listen(8080);
