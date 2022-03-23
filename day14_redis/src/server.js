const app = require("./index");

const connect=require("./configs/db")

app.listen((6432),async ()=>{
try {
    await connect();
    console.log("6432")
    
} catch (error) {
    console.log(error.message);
}
});

