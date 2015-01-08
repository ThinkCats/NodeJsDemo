var net=require('net');

function getConn(c){
	console.log('服务器已经连接');
	c.on('end',function(){
		console.log('服务器已经断开');
	});
	c.on('data',function(data){
		console.log("收到客户端信息："+data.toString());
	});

	c.write('你好，这是服务器消息');
	c.pipe(c);
}

var server=net.createServer(getConn).listen(8888,function(){
	console.log('服务器已经绑定');
});


