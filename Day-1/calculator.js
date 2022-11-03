const express = require("express");
const bodyParser = require('body-parser');

const app= express();
app.use(bodyParser.urlencoded({extended:true}));//allow us to nested object


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",(req,res){
var num1= req.body.num1;//explicitly turning to humber
var num2 = req.body.num;2
var res = num1+num2;
res.send(res);
});


app.listen(3000,function(){
    console.log("server started on 3000")
});