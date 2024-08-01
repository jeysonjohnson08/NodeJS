const express = require("express")

/*
In express JS app.listen(); method creates both http server 
instance and starts the server listening, combining the fucntionality
of creaing and listening in a single method call. This is a convinient
method provided by express to simplify the process of starting a server.


The listen method is called on the app object, which is an instance of the Express application.
This method sets up the server to listen for incoming connections on the specified port, in this case, port 5000.
Internally, app.listen calls the Node.js http.createServer method to create the server and bind it to the specified port.
*/ 

const app = express();

app.get("/",(req,res)=>{
    res.status(404).set('Content-Type','text/plain');
    res.send("<h1>we're in the home page<h1>");
})

app.get("/about",(req,res)=>{
    res.status(200).set("Content-type","text/html")
    res.send("<h2>you are in the about page</h2>")
})

/*
The app.all() method in Express is used to handle all HTTP methods (GET, POST, PUT, DELETE, etc.) for a specific route or path. 
This method is particularly useful when you want to apply middleware or handle requests regardless of the HTTP method used.

*/

app.get("*",(req,res)=>{
    res.status(404).set("Content-Type","text/plain")
    res.send("the page your looking for is not available")
})

app.listen(5000,()=>{
    console.log("express is listening in port 5000")
})