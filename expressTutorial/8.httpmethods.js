const express = require("express")
const app = express()
const path = require("path");
let {products, people} = require("./data")

app.use(express.json());
/*The express.json() is a built-in middleware function in Express.js. It is responsible for parsing the incoming request bodies before your handlers.

Here’s what it does:

Parsing JSON: It parses incoming requests with a JSON payload, which are based on body-parser.

Populating req.body: The middleware populates the req.body property with a JavaScript object after parsing the incoming request data. 
This object contains key-value pairs of data submitted in the request body.*/

app.use(express.static(path.join(__dirname, 'methods-public')));

//app.use(express.urlencoded({extended: false}))//the extended option determines how the URL-encoded data is parsed.  (It parses it in the  simple way



/*
In Express.js, urlencoded middleware is needed to access form data because it processes the incoming request bodies
 and makes the data available in the req.body object.

 It 
*/
app.use(express.urlencoded({extended: false}))//the extended option determines how the URL-encoded data is parsed.  (It parses it in the  simple way
// and no complex structures like nested objects will not be parsed)

/*
Post req

When you send a POST request, the body is crucial because it 
contains the data you want to send to the server. This is different
 from GET requests, where data is usually sent via the URL query string. 
*/

app.get("/api/people",(req,res)=>{
    res.status(200).json({success: true, datas: people})
})


app.post("/api/people",(req,res)=>{

const {name} = req.body;
console.log(name);
    res.status(201).json({person: name});
})


app.post("/login",(req,res)=>{
    const {name} = req.body;
    if(name){
        res.status(200).send("welcome user")
     }
    else{
        console.log("in login");
res.status(404).send("please provide some username value")    }
})


app.listen(3000,()=>{console.log("server is listening to port 3000")})


// USING THE APPROPRIATE METHODS

/*

### Summary of HTTP Methods Usage

**1. POST**
   - **Purpose**: Submit data to be processed; often for creating new resources.
   - **Characteristics**:
     - Not idempotent: multiple identical requests create multiple resources.
     - Used for non-idempotent actions (e.g., form submissions).

**2. PUT**
   - **Purpose**: Update a resource or create it if it doesn't exist.
   - **Characteristics**:
     - Idempotent: multiple identical requests have the same effect as one.
     - Used for creating or updating resources.

**3. DELETE**
   - **Purpose**: Delete a specified resource.
   - **Characteristics**:
     - Idempotent: once the resource is deleted, further identical requests have no additional effect.
     - Used for removing resources.

**Key Reasons for Using Appropriate Methods:**
1. **Semantics and Clarity**: Each method has a clear and distinct meaning, improving readability and maintainability.
2. **Idempotence**: PUT and DELETE are idempotent, avoiding unintended side effects from multiple identical requests.
3. **Caching and Optimization**: Methods like GET and PUT can be cached, optimizing network performance.
4. **Standards and Best Practices**: Following conventions makes your API predictable and easier to integrate.

### Example Usage
- **Creating a Resource**: Use **POST** (`/users`) to create a new user.
- **Updating a Resource**: Use **PUT** (`/users/{id}`) to update an existing user's information.
- **Deleting a Resource**: Use **DELETE** (`/users/{id}`) to delete an existing user.

Using the correct HTTP method ensures a robust, predictable, and easy-to-use API.
*/

//EXAMPLE DIFFERENCE BETWEEN POST AND PUT

 /*
 
 Key Differences
Resource Creation and URL Assignment:

POST: Used when the client does not know the URL of the resource. The server assigns the URL.
Example: POST /users creates a new user and the server might return /users/123.
PUT: Used when the client knows the URL of the resource. The client specifies the URL.
Example: PUT /users/123 creates or updates the user with ID 123.
Idempotence:

POST: Not idempotent. Multiple identical requests result in multiple resources.
PUT: Idempotent. Multiple identical requests result in the same resource state.
Use Case:

POST: Creating new resources when the client does not have the URL.
PUT: Updating existing resources or creating resources at a known URL.
 */