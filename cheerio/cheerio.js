var cheerio= require('cheerio');
var request=require('request');
var url='http://www.cnblogs.com/juepei/';
var result=[];

function getDatas(){
request(url,function(error,res,body){
	if(!error && res.statusCode == 200){
		//console.log(body);
		var $=cheerio.load(body);
		$('div').filter(function(i,e){
			if($(this).attr('class')==='postTitle'){
				console.log($(this).text());
				result[i]=$(this).text();
			}
		});
	}
	else{
		console.log(error);
	}
});
}


function print(arry){
	for(var i=0;i<arry.size;i++){
		console.log(arry[i]);
	}
}

getDatas();
console.log('--------------------------- result -----------------------------');
print(result);
