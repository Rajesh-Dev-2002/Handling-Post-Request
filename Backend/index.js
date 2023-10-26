const express = require("express")

const app = express();

app.get("/register",(req,res)=>{
    let {user, pass} = req.query;
    res.send(`This is GET Request,Welcome ${user}`)
})

app.post("/register",(req,res)=>{
    res.send("This is POST Request")
})
let port = 5050;
app.listen(port,()=>{
    console.log(`Server is running at Port ${port}`)
})