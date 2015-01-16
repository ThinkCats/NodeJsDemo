var cheerio=require('cheerio');
var request=require('request');
var fs=require('fs');
var async=require('async');

var url='http://www.cnblogs.com/juepei/';
var result=new Array();

async.parallel({
	one:function(cb){
		request(url,function(error,res,body){
			if(!error && res.statusCode==200){
				var $=cheerio.load(body);
				$('div').filter(function(i,ele){
					if($(this).attr('class')==='postTitle'){
						result.push($(this).text().trim());
					}
				});
				//console.log(result);
				cb(result);
			}
		});
	}
},function(err,results){
	if(err){
		console.log(err);
	}else{
		console.log(results);
	}
});


