var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello I am Patcharaporn Thongrong (5711404871)!');
    res.end('Hello I am Laksamee Prathumwan (5711403366)!');
}).listen(8080);
