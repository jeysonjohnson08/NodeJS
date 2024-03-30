// OS module gives you important properties and methods to interact with the Operating System

const os = require('os');
const userInformation = os.userInfo();
console.log(userInformation);
console.log("The system uptime is: ",os.uptime())


const currentOS = {
    name : os.type(),
    release : os.release(),
    totmem : os.totalmem(),
    fmem : os.freemem()

}

// for (let i in currentOS){
//     console.log(currentOS[i])
// }

for(let key in currentOS){
  console.log( `${key}: ${currentOS[key]}`)

}

console.log(os.totalmem-os.freemem)

