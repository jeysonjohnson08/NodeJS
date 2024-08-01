/*
its a way to send small amounts of infomration to the server
using the url.

This information is further can be used to querying the database,
filtering something(upto the people who are setting up the server).

Whatever comes after the ? in url is not a part of url. Meaning (Its a 
    way for the user to send the data to the server and server decides
    what to do with the data
)
You can send almost anything in query strinf params(e.g.,  
    &page=2 (to fetch the second page)
    &hitsperpage = 20
)

We are responsible to handle the key and value in params. thus making sure the 
user doesn't randomly enter choclatemilkshake to get a response back.

We can add as many query string params as we want.

*/

const express = require("express")
const app = express()

const {products} = require("./data.js")

app.get("/",(req,res)=>{
    res.send("home page")
})

app.get("/api/v1/query",(req,res)=>{
    // console.log(req.query);
    // const{name, age} = req.query;
    // res.send(name+age)
    const {search, limit} = req.query;
    
    let sortedProducts = [...products];
    console.log(search,limit);
    if(search){
     sortedProducts = sortedProducts.filter(product=>{
     return product.name.startsWith(search);
     // always when we are setting up a condition make sure we go with return. so that way
    // we don't execute the next send. That way we'll avoid errors
    })
}
    if(limit){
         sortedProducts = sortedProducts.slice(0,Number(limit));
    
    }

    if(sortedProducts.length < 1){
        return res.status(200).json({success: true, data : []})
    }
    res.status(200).json(sortedProducts);
    // we didn't add return in this cause there's nothing after this.
})

app.listen(3000,()=>{
    console.log("server is listening in port 3000")
})