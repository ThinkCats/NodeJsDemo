var cheerio= require('cheerio');
var request=require('request');
var fs=require('fs');
var buffer=require('buffer');

var url='http://www.cnblogs.com/juepei/default.html?page=';
var result=new Array();
var fs_option={
	encoding:'utf8'
}

function getDatas(){
	for(var k=0;k<13;k++){

	request(url+k,function(error,res,body){
		if(!error && res.statusCode == 200){
			var $=cheerio.load(body);
			var j=0;
			$('div').filter(function(i,e){
				if($(this).attr('class')==='postTitle'){
					j++;
					//console.log($(this).text().trim());
					result.push($(this).text().trim())+'\r\n';
				}
			});
			console.log(result.toString());
			fs.writeFile('/home/wang/ch/data.txt',result.toString(),function(err){
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
}


getDatas();
