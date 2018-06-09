var net = require('net');

var server = net.createServer(function(socket) {
	var body = '<!DOCTYPE html><html lang="en"><head><meta charet="UTF-8"><title></title></head><body><strong>Hello World</strong></body></html>';
	socket.write('HTTP/1.1 200 OK\r\n');
	socket.write('Content-Length: '+ body.length+'\r\n');
	socket.write('Content-Type: text/html\r\n');
	socket.write('\r\n');
	socket.write(body);
	socket.pipe(socket);
	socket.end();
	socket.on('end', function () {
		console.log('Recieved a Get request')
	});
});

server.listen(8080, '127.0.0.1');