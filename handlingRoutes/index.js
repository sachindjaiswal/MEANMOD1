import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.send("This the initial page ofthe server")
})

app.get("/home",(req,res)=>{
    res.send("This is the home page of the server")
})
app.get("/about",(req,res)=>{
    res.send("This is the about page of the server")
})
app.get("/contact",(req,res)=>{
    res.send("This is the contact page of the server")
})


app.listen(3000,()=>{
    console.log("The server is running at 3000");
    
})