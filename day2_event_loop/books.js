const express=require("express");
const app =express();

// console.log(app)


app.get("/books",function(req,res){
console.log("hello")
res.send([{"id":1,"books":"Lady in the Lake"},
{"id":2,"books":"Urbania"},
{"id":3,"books":"Abandoned"},
{"id":4,"books":"Cry of the City"},
{"id":5,"books":"Drowning by Numbers"},
{"id":6,"books":"King of Escape, The (Le roi de l'évasion)"},
{"id":7,"books":"Blast of Silence"},
{"id":8,"books":"Romance in Manhattan"},
{"id":9,"books":"Nickelodeon"},
{"id":10,"books":"Dinosaur"}])
})

app.listen(6997,()=>{
    console.log("my 6997")
})