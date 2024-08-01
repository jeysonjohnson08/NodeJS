const express = require("express")
const app = express()


app.get("/",(req,res)=>{

    res.json([{name:"jeyson"},{name:"jeffrin"}])
    // here we are sending an array of json data
    // if we send directly in json, it will only print the last one
    // because of 2 unique key.
})
app.listen(3000,()=>{
    console.log("server is listening in port 3000")

})