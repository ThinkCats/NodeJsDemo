function hello(){
	var name;
	this.setName=function(yourname){
		name=yourname;
	};
	this.sayHello=function(){
		console.log('hello '+name);
	};
}
module.exports =hello;
