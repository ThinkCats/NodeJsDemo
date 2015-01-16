var async=require('async');

async.series({
	one:function(cb){
		cb(null,1);
	},
	two:function(cb){
		cb(null,2);
	}	
},function(err,result){
	console.log(result.one+result.two);
});
