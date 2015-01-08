var child_process=require('child_process');
var fs=require('fs');
var assert=require('assert');

child=child_process.spawn('ls',{
	stdio:[
		0,'pipe',fs.openSync('err.out','w')
	]});

console.log(child.stdout);
console.log(child.stdio[1]);

assert.equal(child.stdio[0], null);
assert.equal(child.stdio[0], child.stdin);

assert(child.stdout);
assert.equal(child.stdio[1], child.stdout);

assert.equal(child.stdio[2], null);
assert.equal(child.stdio[2], child.stderr);
