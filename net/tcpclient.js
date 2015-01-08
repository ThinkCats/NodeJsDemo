var net=require('net');

var port={
	port:8888
}

var client=net.connect(port,
function(){
	console.log('客户端连接成功');
	client.write('这是客户端的信息');
}
		      );

client.on('data',function(data){
	console.log('客户端收到：'+data.toString());
	client.end();
});

client.on('end',function(){
	console.log('客户端断开连接');
});
