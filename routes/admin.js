// put the routing related codes (codes that should execute for different paths and http methods) into files that we put into the routing folder
const express=require('express');

// importing the router(creating the router object)
const router=express.Router();

// registering the router with methods
// admin/add-product
router.get('/add-product',(req,res,next)=>{
    // sending the response(send allows to send a response)
    // res.send('<h1>Hello from express</h1>');
    res.send(
        '<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="title"><input type="text" name="size" placeholder="size of the product"><button type="submit">Add Product</button></form>'
    );
});

// post filters our post requests
// get filters the get requests
// admin/add-product
router.post("/add-product",(req,res,next)=>{
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/');
});


module.exports=router;