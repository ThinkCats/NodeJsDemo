
var spawn=require('child_process').spawn,grep=spawn('grep',['ssh']);
console.log('spawn child pid:'+grep.pid);
grep.on('close',function(code,signal){
	console.log('child process terminated due to recevied the signal:'+signal);
});
grep.kill('SIGHUP');
