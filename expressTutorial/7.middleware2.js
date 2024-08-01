const express = require("express")
const app = express()
// req => middleware => res

/* consider a functionality authentication, if home route has authentication and 
about route has authentication and also another route has autherntication, we'll 
have to write authentication code for every single thing. Instead of doing this we 
can write one middleware function which does authentication and add it in the route handlers*/


/*
Note: if i typed app.use("api"), this is going to be applied to all the routes which api
is parent e.g., api/u1, api.player, for both these routes the middleware is going to be applied.

*/

/*
Three types of middleware

-Our own middleware

- express built in middleware
app.use(express.static())

-third party middleware
*/

const morgan = require("morgan")

const logger = (req,res,next)=>{ // express provides the req, res and next behind the screen
const method = req.method;
const url = req.url;
const query = req.query;
const time = new Date().getFullYear();
console.log(method, url, time, query);
next();


}

function authorize(req,res,next){
    const user = req.query;
    if(user){
        req.name = "user is present";
    }
    else{
        res.status(404).send("unauthorized");
    }
    next()
    }

// third party middleware

app.use(morgan("dev"))
app.use(morgan("tiny"))
/*

npm morgan is a middleware library for Node.js that logs HTTP requests.
 It is commonly used in Express.js applications to generate logs of incoming requests,
 which can be useful for debugging and monitoring purposes.
*/

app.get('/',(req,res)=>{
    console.log("in home")
    res.send('home');
})


app.get("/user",authorize,(req,res)=>{
    console.log("in user");
    console.log(req.name); // accesssing the info which we set in  middleware
})

// To use multiple middleware
app.get("/demo",[authorize, logger],(req,res)=>{
    console.log("multiple middeware function");
    res.send("multiple middleware");
})
app.listen(3000,()=>{
    console.log("server is listening to port 3000")
})