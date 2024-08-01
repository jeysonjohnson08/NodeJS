/*
Request headers and response headers are part of the HTTP protocol and are used to 
convey information about the request and response. These headers contain metadata, 
such as content type, encoding, status codes, caching policies, and more.
*/


/*

Sure! Here's a simplified overview of important request and response headers and the data they contain:

### Request Headers

Request headers are sent by the client (like a web browser) to the server. They provide information about the request and the client.

- **Host**: Specifies the domain and port number of the server.
  - Example: `Host: www.example.com`

- **User-Agent**: Identifies the client software making the request.
  - Example: `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)`

- **Accept**: Indicates the types of content the client can process.
  - Example: `Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*

  - **Accept-Language**: Specifies preferred languages for the response.
  - Example: `Accept-Language: en-US,en;q=0.5`

- **Accept-Encoding**: Lists acceptable content encodings (like compression).
  - Example: `Accept-Encoding: gzip, deflate, br`

- **Connection**: Controls whether the connection stays open after the request.
  - Example: `Connection: keep-alive`

- **Authorization**: Contains credentials for authentication.
  - Example: `Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`

- **Cookie**: Sends stored cookies to the server.
  - Example: `Cookie: sessionId=abc123; username=johndoe`

### Response Headers

Response headers are sent by the server to the client. They provide information about the response.

- **Content-Type**: Indicates the media type of the response.
  - Example: `Content-Type: text/html; charset=UTF-8`

- **Content-Length**: The size of the response body in bytes.
  - Example: `Content-Length: 138`

- **Set-Cookie**: Sends cookies from the server to the client.
  - Example: `Set-Cookie: sessionId=abc123; Path=/; HttpOnly`

- **Cache-Control**: Directives for caching mechanisms.
  - Example: `Cache-Control: no-cache, no-store, must-revalidate`

- **Expires**: Specifies when the response is considered stale.
  - Example: `Expires: Wed, 21 Oct 2021 07:28:00 GMT`

- **ETag**: A unique identifier for the version of a resource.
  - Example: `ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"`

- **Location**: Indicates the URL to redirect the client to.
  - Example: `Location: http://www.example.com/newpage.html`

- **Server**: Information about the server software.
  - Example: `Server: Apache/2.4.1 (Unix)`

- **Access-Control-Allow-Origin**: Specifies allowed origins for cross-origin requests.
  - Example: `Access-Control-Allow-Origin: *`

### Examples

#### Request Example:
```http
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html,application/xhtml+xml
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
```

#### Response Example:
```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 138
Cache-Control: no-cache
Server: Apache/2.4.1 (Unix)
Set-Cookie: sessionId=abc123; Path=/; HttpOnly
```

### Summary

- **Request Headers**: Provide information about the client and the request (like what type of content it accepts and any cookies it has).
- **Response Headers**: Provide information about the server and the response (like the type of content being sent and caching instructions).

These headers are essential for the proper functioning and optimization of web communication.

*/
// const http = require("http")

// const server = http.createServer((req,res)=>{

//  // this changes how data is rendered in the website and if you look at the network tab while 
// // inspecting it will show the status code as not found 

// // res.write(req.url)
// if(req.url == "/"){
//     res.writeHead(200,{"content-Type":"text/html"});
// res.write("<h1>You are in the home page<h1>");
// res.end();
// }
// else if(req.url == "/about"){
//     res.writeHead(200,{"content-Type":"text/html"});
// res.write("<h1>You are in the about page<h1>");
// res.end();

// }
// else{
//     res.writeHead(404,{"content-type":"text/html"});
//     res.write("<h1>page missing<h1>");
//     res.end();
// }

// })

// server.listen(3000,()=>{
//     console.log("server is listening in port 3000")
// })



// navbar app
const http = require("http");
const { readFileSync } = require("fs");

// Read the index.html file synchronously
const indexhtml = readFileSync("./expressTutorial/navbar-app/index.html");

const server2 = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(indexhtml);
    res.end();
});

server2.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
