var http=require('http');
http.get('http://www.baidu.com',function(res){
	console.log('Get Response:'+res.statusCode);
}).on('error',function(e){
	console.log('get err:'+e.message);	
});
