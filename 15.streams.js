

// When we have to handle and manupulate streaming data, for example, continuous source or a big file, streams come in handy.
/*
 streams are the way to reading from and writing to data sources efficiently. It allow us to work with data in chunks, which is
 particularly useful in dealing with larger amounts of data, which cannot be fit into memory completely 
*/


// const {writeFileSync} = require('fs')

// for(let i=0; i<10000;i++){
//     writeFileSync("content/bigfile.txt",`hello world ${i}/n`,{flag: 'a'})
// }

const http = require("http")
const {createReadStream} = require("fs")
const {readFileSync} = require("fs")


const server2 = http.createServer((req,res)=>{
    console.log("inside the server code")
    if(req.url === "/"){
    // const val1 = readFileSync("./content/bigfile.txt", {encoding:"utf-8"});
    // res.end(val1);

    const val2 = createReadStream("./content/bigfile.txt")
    val2.pipe(res); // if you inspect the page, the transfer encoding will be chunked
    
    }
})

server2.on("request",()=>{
    console.log("hola")
})

server2.listen(5000, ()=>{console.log("server is listerning to port 3000")});


