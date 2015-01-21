var async=require('async');
var request=require('request');
var cheerio=require('cheerio');
var url='http://www.cnblogs.com/juepei/';

async.parallel([function(callback){
	request(url,function(error,res,body){
		if(!error && res.statusCode==200){
			var $=cheerio.load(body);
			console.log($);
			$('div').filter(function(i,e){
				if($(this).attr('class')==='postTitle'){
					console.log($(this).text().trim());
					callback(null,$(this).text().trim());
				}
					});
		}
	});
}],
function(err,results){
	console.log(results);
});


function getData(weburl){
	http.get(weburl,function(data){
		console.log(data);
	});
}
