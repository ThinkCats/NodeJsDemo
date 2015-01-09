var http=require('http');
var options={
	hostname:'www.baidu.com',
	port:80,
	path:'/',
	method:'GET'};

var req=http.request(options,function(res){
	console.log('Status:'+res.statusCode);
	console.log('Headers:'+JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data',function(chunk){
		console.log('Body:'+chunk);
	});
});

req.on('error',function(e){
	console.log('problem with request:'+e.message);
});

req.end();
