var cheerio= require('cheerio');
var request=require('request');
var fs=require('fs');
var buffer=require('buffer');

var url='http://www.cnblogs.com/juepei/';
var result=new Array();
var fs_option={
	encoding:'utf8'
}

function getDatas(){
	request(url,function(error,res,body){
		if(!error && res.statusCode == 200){
			var $=cheerio.load(body);
			var j=0;
			$('div').filter(function(i,e){
				if($(this).attr('class')==='postTitle'){
					j++;
					//console.log($(this).text().trim());
					result.push($(this).text().trim());
				}
			});
			console.log(result.toString());
			fs.appendFile('/home/wang/data.txt',result.toString(),function(err){
				if(err){
					console.log('file:'+err);
				}else{
					console.log('write ok');
				}
			});
		}
		else{
			console.log(error);
		}
	});
}


getDatas();
