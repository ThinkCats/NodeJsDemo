var net=require('net');

var server=net.createServer(function(c){
	console.log('client connected');
	c.on('end',function(){
		console.log('client disconnected');
	});
	c.on('data',function(data){
		console.log('rec:'+data.toString());
	});
	c.write('hello\r\n');
	c.pipe(c);
});

server.listen(8888,function(){
	console.log('server bound');
});

