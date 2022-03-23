 const express=require("express");

 const client=require("../configs/redis");

 const Todo=require("../models/todo_model");

 const router = express.Router();

 router.post("",async(req,res)=>{
try {
    const todo=await Todo.create(req.body);

    const todos=await Todo.find().lean().exec();

    client.set("todos",JSON.stringify(todos));

    return res.status(201).send(todo);
} catch (error) {
    return res.status(500).send(error.message);
}
 });


 router.get("",async(req,res)=>{
    try {
        client.get ("todos",async(fetchedTodos)=>{
            if(fetchedTodos){
                const todos=JSON.parse(fetchedTodos)
                return res.status(200).send(todos);
            }
            else{
                try {
                    
                    const todos= await Todo.find().lean().exec();
    
                    client.set("todos",JSON.stringify(todos));
    
                    return res.status(200).send(todos);
                } catch (error) {
                
                    return res.status(500).send(error.message);

                }

            }
        })
        const todos=await Todo.find().lean().exec();
    
        return res.status(200).send(todos);
    } catch (error) {
        return res.status(500).send(error.message);
    }  
 });

 router.get("/:id",async(req,res)=>{
    try {
        const todo=await Todo.findById(req.params.id).lean().exec();
    
        return res.status(200).send(todo);
    } catch (error) {
        return res.status(500).send(error.message);
    }  
 });

 router.patch("/:id",async(req,res)=>{
    try {
        const todo=await Todo.findById(req.params.id,req.body,{new:true}).lean().exec();
    
        return res.status(200).send(todo);
    } catch (error) {
        return res.status(500).send(error.message);
    }  
 });

 router.delete("/:id",async(req,res)=>{
    try {
        const todo=await Todo.findByIdAndDelete(req.params.id);
    
        return res.status(200).send(todo);
    } catch (error) {
        return res.status(500).send(error.message);
    }  
 });


 module.exports=router;