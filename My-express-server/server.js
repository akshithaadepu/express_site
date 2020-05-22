const express = require("express");
const app = express();
app.get("/",function(request,response){
   response.send("<h1>Hello, Folks<\h1>");
});
app.get("/contact",function(request,response){
   response.send("You can contact me through gmail");
});
app.get("/about",function(request,response){
   response.send("<p>This page is created by Akshitha Adepu</p>");
});
app.listen(3000,function(){
  console.log("Server 3000") ;
});
