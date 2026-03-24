import express from "express";



const app = express()

app.get("/",(req,res)=>{
    res.send(`<h1>This is the home page</h1>`)
})

app.listen(3000,()=>{
    console.log("The server is running at 3000");
    
})