// importing express
const express=require("express");

// create an express application and store in a constant named app
const app=express();
// express stores and manages a lot for us behind the scenes

// importing body-parser
const bodyParser=require("body-parser");
// it registers a middleware, calls next in the end but before that it does all that body parsing
app.use(bodyParser.urlencoded({extended:false}));




// use allows us to add a new middleware function
// req and res are request and responses
// next is a function that will be passed to the function inside app.use 
// this next function needs to be executed to allow the request to travel on the next middleware
app.use('/',(req,res,next)=>{
    // sending the response(send allows to send a response)
    // res.send('<h1>Hello from express</h1>');
    next();
});


// we have to put this before the home route because every route starts with a slash and if the use function for home route is put before, 
// it will match for any route
app.use('/add-product',(req,res,next)=>{
    // sending the response(send allows to send a response)
    // res.send('<h1>Hello from express</h1>');
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="title"><input type="text" name="size" placeholder="size of the product"><button type="submit">Add Product</button></form>');
});

// post filters our post requests
// get filters the get requests
app.post("/product",(req,res,next)=>{
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    // sending the response(send allows to send a response)
    // res.send('<h1>Hello from express</h1>');
    res.send('<h1>Hello from Express!</h1>');
});

app.put






app.listen(3000);
