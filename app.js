// importing express
const express=require("express");
// create an express application and store in a constant named app
const app=express();
// express stores and manages a lot for us behind the scenes
const path=require("path");

// importing body-parser
const bodyParser=require("body-parser");
// it registers a middleware, calls next in the end but before that it does all that body parsing
app.use(bodyParser.urlencoded({extended:false}));

// we are granting read access to a folder names public
app.use(express.static(path.join(__dirname,'public')));
// importing the router from admin.js
const adminRoutes=require('./routes/admin.js');
// importing router from shop.js
const shopRoutes=require('./routes/shop.js');

const contactRoutes=require('./routes/contact.js');

// it will automatically consider our routes in the admin.js file when funelling the requests in this middleware
// only routes starting with admin will go into the adminRoutes
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'./','views','not-found.html'));
})

app.listen(3000);
