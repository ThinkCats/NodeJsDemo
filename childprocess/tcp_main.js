var child=require('child_process').fork('./tcp_child.js');
var server=require('net').createServer();
server.on('connection',function(socket){
	console.log('handled by parent,begin stop server socket');
	socket.end('handled by parent');
});

server.listen(8888,function(){
	child.send('server',server);
	console.log('server has started');
});
