//middleware 

/*
middle ware is the function or program or something which is going to run, b/w the time the server gets the request 
and sends the response back.

*/

/*

app.use() is a generic method of defining a middleware that applies to all or specific routes.

// example
const express = require("express")
const app = expess()

//global middleware(applies to all routes)
app.use((req,res,next)=>{
    console.log("global middleware")
    next();
})

// route specific middleware

app.use('/users',(req,res,next)=>{
    console.log("Middleware for /users route")
})
*/

/*

// using middle ware in route handlers

const express = require('express');
const app = express();

// Middleware function
const logMiddleware = (req, res, next) => {
    console.log('Logging request');
    next();
};

// Applying middleware to specific route
app.get('/users', logMiddleware, (req, res) => {
    console.log("users page");
    res.send("in the users page");
});

// Another route without the middleware
app.get('/', (req, res) => {
    console.log("home page");
    res.send("Welcome to the home page");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

*/

/*

middleware in specific http methods

const express = require('express');
const app = express();

// Middleware function
const authMiddleware = (req, res, next) => {
    console.log('Authenticating request');
    next();
};

// Applying middleware to POST requests to /submit
app.post('/submit', authMiddleware, (req, res) => {
    console.log("submit page");
    res.send("Form submitted");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


*/


/*
/*
when a http request is made to the server(e.g., s GET request to '/',
) the request goes to the middleware stack in the order they were defined

If it find the route handler first it just executes the route handler and 
it exits

If it finds the global middle ware without next function, it just executes
the global middleware and exits or if the middleware had the next() function 
it executes the next line of code. (could be a middleware or a request handler)

if it finds a middle where with specific route, if the route we searched in google
matched , then it will execute. if not skip.

*/




//execution flow
/*

Detailed Flow Explanation:
Server Start:

When you run this program, the server starts and listens for incoming requests on port 3000. It logs "Server is running on port 3000" to the console.
Incoming Request:

When an HTTP request is made to the server (e.g., a GET request to /), the request goes through the middleware stack in the order they were defined.
Middleware Execution:

The first middleware function defined by app.use((req, res, next) => { ... }) is executed. It logs "Middleware before route handling" to the console and calls next(), allowing the request to move to the next middleware or route handler.
Route Handling:

Since the request is a GET request to /, the route handler app.get('/', (req, res) => { ... }) is executed. It sends "Hello World" as the response to the client.
Response Sent:

After the route handler sends the response, the request-response cycle is complete for this request. No further middleware or route handlers are executed.
Error Handling:

If an error occurs in any middleware or route handler, the error-handling middleware app.use((err, req, res, next) => { ... }) would be executed. However, in this particular flow, no errors are introduced, so this middleware is not triggered.
*/


//note
/*
 when you think of middle ware you think of things that happened in between the request
 and response cycle

 There's no point in calling next function in the last middleware


 middleware runs in the order that you define it.

 put the middleware in the top, before all route handlers, because once the exact route handler
 executes before the middleware, the middleware never executes
or
you can call the next function from the route handler to execute the middle ware function

app.get() accepts 2 things. 1 is path. 2 is list of middlewares. 

one of the benefits of using middleware is the ability to access req and res

working [middleware executes -> next -> next middleware or route function executes ->
    comesback to the next line of next and executes the rest of the middleware]
] - by this we can declare middleware in the top and execute the rest after every 
chain of middleware finished executing.

takeaway - middleware is essentially just a function which takes req, res and next, and it calls next
whenever it wants to move to next form of middleware and in between it can modify the req and res.

*/

const express = require("express")
const app = express()


app.use(logger);

app.get("/",(req,res)=>{
    console.log("home page");
    res.send("Home page");
})

app.get("/users", auth,(req,res)=>{
    console.log(req.query.jale);
    // console.log(req.admin);
    // console.log("users");
    // console.log(req.cokoo);
    res.send("users page");
})


// global middleware function
function logger(req,res,next){
    console.log("logged");
    next(); // next is just a function which calls the next middleware

}

// middleware which is going to be used for a single route
function logger(req,res,next){
    console.log("logged");
    console.log(req.originalUrl)
    next(); // next is just a function which calls the next middleware

}

function auth(req,res,next){
    // query is entered by user in url
    if(req.query.jale == "true"){
    req.admin = "jeyson";
    req.cokoo = "bird";
    console.log("authenticated");
    next();
}
else{
    res.send("you are not authenticated to enter")
}
}


app.listen(3000,()=>{
    console.log("server is listening in port 3000")
})