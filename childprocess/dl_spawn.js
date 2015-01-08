var url=require('url');
var fs=require('fs');
var cp=require('child_process');

var DOWNLOAD_DIR='./';
var file_url='http://htmljs.b0.upaiyun.com/uploads/1396874069658-nodejs_1280x1024.png';

function downloads(file_url){
	var filename=url.parse(file_url).pathname.split('/').pop();
	var file=fs.createWriteStream(DOWNLOAD_DIR+filename);
	var curl=cp.spawn('curl',[file_url]);	//use spawn
	curl.stdout.on('data',function(data){
		file.write(data);
	});
	curl.stdout.on('end',function(data){
		file.end();
	console.log(filename+'downloaded to'+DOWNLOAD_DIR);
	});

	curl.on('exit',function(code){
		if(code!=0){
			console.log('Failed:'+code);
		}
	});
	
};	

downloads(file_url);
