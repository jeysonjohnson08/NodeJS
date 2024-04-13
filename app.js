const http = require("http")

const server = http.createServer((req,res)=>{
    console.log("request event");
    res.end("Hello world");
})
/*
when I refresh the page the browser sends a request to the server for the page.
The server is something which hosts the website or web application.
In mycase, I have created a server using "http.createServer",and this server
is listening to incoming requests.

## the "request event" - console log will get logged twice, because, the browser 
sends two requests to my node.js server:

1. for the page content
2. for the favicon.ico file.

since I am logging in "request event" for every request which I am receiving, I'll see 
"request event" logged twice in my node.js console


*/
server.listen(5000,()=>{
    console.log("server is listerning to port 5000")
})
