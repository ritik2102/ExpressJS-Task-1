// put the routing related codes (codes that should execute for different paths and http methods) into files that we put into the routing folder
const express=require('express');

const path=require("path");

// we have access to the root directory here, we can simply add respecive path to it
const rootDir=require('../util/path');

// importing the router(creating the router object)
const router=express.Router();

// registering the router with methods
// admin/add-product
router.get('/add-product',(req,res,next)=>{
    // sending the response(send allows to send a response)
    // res.send('<h1>Hello from express</h1>');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

// post filters our post requests
// get filters the get requests
// admin/add-product
router.post("/add-product",(req,res,next)=>{
    res.redirect('/');
});


module.exports=router;