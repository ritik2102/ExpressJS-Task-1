const path=require('path');

const rootDir=require('../util/path');

exports.getContact=(req,res,next)=>{
    // sending the response(send allows to send a response)
    // res.send('<h1>Hello from express</h1>');
    res.sendFile(path.join(rootDir,'views','contact.html'));
};

exports.success=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
};