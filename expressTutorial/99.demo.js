const express = require("express")
const app = express();

app.get("/",(req,res)=>{
    res.send("home");
})
app.listen(5000,()=>{
    console.log("server is listening to port 5000")
})