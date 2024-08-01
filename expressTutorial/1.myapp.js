const http = require("http");
const { readFileSync } = require("fs");

// Read the index.html file synchronously
const indexhtml = readFileSync("./expressTutorial/navbar-app/index.html");
const pngimage = readFileSync("./expressTutorial/navbar-app/logo.svg")
const styles = readFileSync("./expressTutorial/navbar-app/styles.css")
const mind = readFileSync("./expressTutorial/navbar-app/browser-app.js")


const server2 = http.createServer((req, res) => {
    const url = req.url;

    if(url =="/"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(indexhtml);
        res.end();
    }

    else if(url == "/styles.css")
        {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.write(styles);
            res.end();
        }
    else if(url == "/logo.svg"){
        res.writeHead(200,{"Content-Type":"image/svg+xml"})
        res.write(pngimage);
        res.end();
    }
    else if(url == "/browser-app.js"){
        res.writeHead(200,{"Content-Type":"text/javascript"})
        res.write(mind);
        res.end();
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"})
        res.write("<h1>Content not found</h1>");
        res.end();
    }
    
  
});

server2.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
