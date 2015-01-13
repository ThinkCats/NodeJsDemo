var cheerio=require('cheerio');
var http=require('http');
var url='http://v.163.com/special/opencourse/englishs1.html';

function download(url,callback){
	http.get(url,function(res){
		var data='';
		res.on('data',function(chunk){
			data+=chunk;
		});

		res.on('end',function(){
			callback(data);
		});
	}).on('error',function(){
		callback(null);
	});
}

download(url,function(data){
	if(data){
		var $=cheerio.load(data);
		$('a.downbtn').each(function(i,e){
		console.log($(e).attr('href'));
		});

		console.log('done');
	}else{
		console.log('error');
	}	
});
