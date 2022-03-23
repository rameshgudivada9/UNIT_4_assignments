const express=require("express");

const todosController = require("./controllers/todo_controler")

const app=express();

app.use(express.json());

app.use("/todos",todosController);

module.exports=app;