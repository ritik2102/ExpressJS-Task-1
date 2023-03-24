// importing express
const express=require("express");
// create an express application and store in a constant named app
const app=express();
// express stores and manages a lot for us behind the scenes

// importing body-parser
const bodyParser=require("body-parser");
// it registers a middleware, calls next in the end but before that it does all that body parsing
app.use(bodyParser.urlencoded({extended:false}));

// importing the router from admin.js
const adminRoutes=require('./routes/admin.js');
// importing router from shop.js
const shopRoutes=require('./routes/shop.js');

// it will automatically consider our routes in the admin.js file when funelling the requests in this middleware
// only routes starting with admin will go into the adminRoutes
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);
