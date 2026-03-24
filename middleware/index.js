import express from "express"
import {logger} from "middleware/looger.js"

const app = express()
app.use(logger)


app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(3000,()=>{
    console.log("The server is runnimg at 3000");
    
})