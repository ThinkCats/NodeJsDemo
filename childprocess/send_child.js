process.on('message',function(m){
	console.log('Child recevied:');
	for(var o in m){
		console.log(m[o]);
	}
	});

process.send({foo:'bar'});
