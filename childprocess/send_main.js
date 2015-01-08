var cp=require('child_process');
var n=cp.fork('./send_child.js');

n.on('message',function(m){
	console.log('Parent get:');
	for(var o in m){
		console.log(m[o]);
	}
});

n.send({hello:'world'});
