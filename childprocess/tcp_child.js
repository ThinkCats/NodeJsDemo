process.on('message',function(m,server){
	if(m==='server'){
		server.on('connection',function(socket){
			console.log('handled by chiled');
			socket.end('handled by child');
		});
	}
});
