const http=require("http");
const express=require("express");
const bodyparser=require("body-parser");
const fs= require("fs");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmi.html");
})

app.post("/",function(req,res){
    const height=Number(req.body.h);
    const weight=Number(req.body.w);

    const bmi=weight/(height*height);
    res.send("BMI is "+bmi);
})

app.listen(5000,function(req,res){
    console.log("server started");
})