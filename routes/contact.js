const express=require('express');

const path=require("path");

// we have access to the root directory here, we can simply add respecive path to it
const rootDir=require('../util/path');

// importing the router(creating the router object)
const router=express.Router();

const contactController=require('../controllers/contact');

// registering the router with methods
// admin/add-product
router.get('/contact',contactController.getContact);

// post filters our post requests
// get filters the get requests
// admin/add-product
router.post("/contact",contactController.success);


module.exports=router;