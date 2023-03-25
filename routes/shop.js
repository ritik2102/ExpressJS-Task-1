const path=require("path");

const express=require("express");

const rootDir=require('../util/path.js');

const router=express.Router();

router.get('/',(req,res,next)=>{
    // sending the response(send allows to send a response)
    // dirname golds the absolute path to the current folder
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports=router;