var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1 style="color:green">Hello</h1>');
	res.write('<h3 style="color:blue">I am Patcharaporn Thongrong (5711404871)<h3>');
	res.write('<h3 style="color:red">I am Laksamee Prathumwan (5711403366)</h3>');
}).listen(8080);
