const path=require("path");

// This givs us path to the file which is responsible for the fact that our application is running
module.exports=path.dirname(process.mainModule.filename);