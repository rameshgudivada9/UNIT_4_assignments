
const app=require("./index");
const mongooseConnect=require("./configs/db")



app.listen(6556,async()=>{
    try {
        await mongooseConnect();
        console.log(6256);
    } catch (error) {
        return send(error.message)
    }
})



