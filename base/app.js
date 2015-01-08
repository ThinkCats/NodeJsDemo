var http=require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<h1>hello world</h1>');
	res.end('<p>nodejs</p>');
	}).listen(3000);
console.log('Http Server is listening  at port 3000');
