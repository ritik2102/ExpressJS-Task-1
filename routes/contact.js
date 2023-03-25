const express=require('express');

const path=require("path");

// we have access to the root directory here, we can simply add respecive path to it
const rootDir=require('../util/path');

// importing the router(creating the router object)
const router=express.Router();

// registering the router with methods
// admin/add-product
router.get('/contact',(req,res,next)=>{
    // sending the response(send allows to send a response)
    // res.send('<h1>Hello from express</h1>');
    res.sendFile(path.join(rootDir,'views','contact.html'));
});

// post filters our post requests
// get filters the get requests
// admin/add-product
router.post("/contact",(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
});


module.exports=router;