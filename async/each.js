var async=require('async');

var aa=new Array();
for(var i=3;i<10;i++){
	aa.push(i);
}
async.each(aa,function(i,cb){
	console.log('url:www.wagssss'+i);


});
