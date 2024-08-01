const express = require('express')
const app = express()
let {product, people} = require("./data")

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hola");
})

app.listen(3000,()=>{
    console.log("listening to port 3000")
})


app.put("/api/people/:id",(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    console.log(id,name);
    const newPeeps = people.find(playa=>
       playa.id === Number(id)
)

    newPeeps.name = name;
    res.send(newPeeps);

}


)




app.delete("/api/people/:id",(req,res)=>{
    const {id} = req.params;
    
    const newpeeps = people.find(findval => findval.id === Number(id))
    if(!newpeeps)
        {res.status(404).send("success")}

    const newpeople = people.filter(person=>person.id != Number(id));
res.status(200).send(newpeople);
})
  
