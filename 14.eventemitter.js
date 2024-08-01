// const http = require("http")
// const EventEmitter = require("events")

// const emitter = new EventEmitter();

// const newEmitter = new EventEmitter();
// newEmitter.on("request",(nom)=>{
//     console.log(`Events: ${nom}`)
// })
// newEmitter.on("request",()=>{
//     console.log("Without a parameter!")
// })
// newEmitter.emit("request","Jeyson"); // also the emiting order matters, if you emit before the on method, it will not work


// Emit with http 

// const server = http.createServer();
// server.on("request",(req, res)=>{ // the request mentined here is a specific event, if you change the value of it, it wont work
//     console.log("event emitted");
//     res.end("well done my boy");
// });
// server.listen(5000);


