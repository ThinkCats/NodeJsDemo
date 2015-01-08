var spawn=require('child_process').spawn,grep=spawn('grep',['ssh']);

console.log('spawn child pid:'+grep.pid);
grep.stdin.end();
