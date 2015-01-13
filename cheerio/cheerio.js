var cheerio= require('cheerio');
var request=require('request');
var fs=require('fs');
var buffer=require('buffer');

var url='http://www.cnblogs.com/juepei/';
var result=[];
var fs_option={
	encoding:'utf8'
}

function getDatas(){
	request(url,function(error,res,body){
		if(!error && res.statusCode == 200){
			//console.log(body);
			var $=cheerio.load(body);
			var j=0;
			$('div').filter(function(i,e){
				if($(this).attr('class')==='postTitle'){
					j++;
					//console.log($(this).text()+j);
					result[j]=$(this).text();
					buf=new Buffer(256);
					buf.write($(this).text(),'utf8');
					fs.writeFile('/home/wang/data.txt',buf,fs_option,function(err){
						if(err){
							console.log('write data err');
						}
					});
				}
			});
		}
		else{
			console.log(error);
		}
	});
}

function print(arry){
	console.log(arry);
	for(var i=0;i<arry.size;i++){
		console.log(arry[i]);
	}
}

getDatas();
