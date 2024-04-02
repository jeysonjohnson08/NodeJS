const http = require("http")
const server = http.createServer((req,res)=>{
    res.write("Welcome to my first web serverr, hello world");
    res.end(); // once the res.end is called the response is complete. any code after res.end will not be executed.
    //it ends the processing of the current response handler and sends the data back to the client.
    // It is similar to the return keyword of a function.
}
)
server.listen(5000);
