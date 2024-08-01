const express = require("express")
const app = express() 
const {products} = require("./data.js")


app.get("/",(req,res)=>{
res.send("<h1>Home Page</h1><a href='/api/products'>products</a>")
})

app.get("/api/products/",(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id, name, image} =  product;
        return {id, name, image}
    })

    res.json(newProducts)
})

// app.get("/api/products/1",(req,res)=>{
//     const singleProduct = products.find((product)=> product.id === 1);
    
//     res.json(singleProduct);

//     // the map method tranforms each element of an array and returns a new array
//     // searches for and returns the first element which matches the conditon.
// })

// Instead of doing this one by one, In express we have route paramerters which is essentially a way better solution

// In the below example, the place holder is productID, the name is not defined, its random(could be meow, or something)
app.get("/api/products/:productID", (req,res)=>{
    // console.log(req);
    console.log(req.params);
    const {productID} = req.params;
    console.log(productID);
    const singleProduct = products.find((product)=>product.id ===Number(productID));
    res.json(singleProduct);

})
app.listen(3000,()=>{
    console.log("server is listening in port 3000")
})