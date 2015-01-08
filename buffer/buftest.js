buf=new Buffer(256);
len=buf.write('\u00bd+\u00bc=\u00be',0);
console.log(len+'bytes:'+buf.toString('utf-8',0,len));
console.log(buf);
console.log(buf.length);

