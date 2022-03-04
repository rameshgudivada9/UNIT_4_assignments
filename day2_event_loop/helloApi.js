
const express=require("express");
const app =express();

// console.log(app)


app.get("/user",function(req,res){
console.log("hello")
res.send("hello")
})

app.listen(5999,()=>{
    console.log("my 6001")
})