const express=require("express");

const router=express.Router();

router.get('/',(req,res,next)=>{
    // sending the response(send allows to send a response)
    // res.send('<h1>Hello from express</h1>');
    res.send('<h1>Hello from Express!</h1>');
});

module.exports=router;