// importing express
const express=require("express");

// create an express application and store in a constant named app
const app=express();
// express stores and manages a lot for us behind the scenes

// use allows us to add a new middleware function
// req and res are request and responses
// next is a function that will be passed to the function inside app.use 
// this next function needs to be executed to allow the request to travel on the next middleware
app.use((req,res,next)=>{
    console.log('In the middleware!');
    // next allows to continue the request to the next midddleware
    // we can either call next or send the response, if we however, don't do both of these, the request will die
    next();
});

app.use((req,res,next)=>{
    console.log('Another middleware!');
    // sending the response(send allows to send a response)
    // res.send('<h1>Hello from express</h1>');
    res.send({ key1: "value "});
});


app.listen(3000);
