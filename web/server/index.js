var server=require('./server');
var route=require('./router');
var requestHandler=require('./requestHanders');

<!-- 声明一个对象  -->
var handle={}
handle['/']=requestHandler.start;
handle['/start']=requestHandler.start;
handle['/upload']=requestHandler.upload;

server.start(route.route,handle);
