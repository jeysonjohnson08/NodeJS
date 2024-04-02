const http = require("http")
const server = http.createServer((req,res)=>{
    
    if(req.url === "/"){
        res.end("your'e now in the home page")
    }
    else if(req.url === "/about"){
        res.end("you're in the about page now!")
    }
else(res.end(`<h1>OOPS</h1><br>
<p>We can't find the page that your'e looking for!</p><br>
<a href="/">go back to the home page!</a>`))
}
)

server.listen(5000);
