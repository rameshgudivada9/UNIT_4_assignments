

const express=require("express");

const app=express();

app.use(logger);

app.get("/bookss",(req,res)=>{

    console.log("fetching books");

    return res.send("fetching books")
});

function logger(req,res,next){
    console.log("before router");
   next();

    console.log("after router");


}

app.listen(5011,()=>{
    console.log("my 5111")
})