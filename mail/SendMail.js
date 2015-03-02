/**
 * Created by wang on 15-3-2.
 */

var mail=require('nodemailer');

var smtpTrans=mail.createTransport({
   service:"163",
    auth:{
        user:'juepei123@163.com',
        pass:'xxxxx'
    }
});

var content={
    from:'juepei123@163.com',
    to:'624432528@qq.com',
    subject:'test',
    text:'hello world'
};

smtpTrans.sendMail(content, function (err,res) {
    if(err){
        console.log('ERR:'+err);
    }else{
        console.log("SUCCESS");
    }
});


