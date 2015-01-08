function start(){
	console.log('Request handler START was called');
	function sleep(millsec){
		var startTime=new Date().getTime();
		while(new Date().getTime()<startTime+millsec);
	}
	sleep(10000);
	return 'Hello Start';
}

function upload(){
	console.log('Request handler UPLOAD was called');
	return 'Hello Upload';
}

exports.start=start;
exports.upload=upload;

