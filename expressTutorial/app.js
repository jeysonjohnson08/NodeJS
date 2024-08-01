const express = require("express")
const path = require("path")

const app = express()
/*
When a browser requests a file from your server,
Express.js first checks if the requested file matches 
any of the static files in the directory specified by express.static.

static files are files that server does not have to make change.

we just have to dump static files in it, express will take care
of setting up the path, setting up the type and etc.

example of static file is js, img and css
*/
app.use(express.static(path.join(__dirname, 'navbar-app')));

app.get("/",(req,res)=>{
    // res.status(200).sendFile(path.resolve(__dirname,"./navbar-app/index.html"))

    /*
    Yes, express.static follows the common web server convention 
    of serving index.html by default when a request is made to a directory, 
    including the root directory (/). This behavior makes it easy to serve the
     main entry point of your web application 
    without needing to explicitly define a route for it.
    
    By default, when a directory is requested, express.static looks for a 
    file named index.html within that directory.
    If index.html is found in the directory, express.static serves this file.

    */

    /*
    two ways of sending files as response
    1. static assets (to send static files)
    2. Server Side Rendering
    
    */
})

app.all("*",(req,res)=>{
res.status(404).set("Content-Type","text/html").send("page not found")

})
app.listen(5000,()=>{
    console.log("server is listening in port 6000")
})