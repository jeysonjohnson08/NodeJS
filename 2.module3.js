// first way of importing
// const { person1, person2 } = require("./2.module1");
// const { sayHello } = require("./2.module2");

// second way

const person = require("./2.module1");
const sayHello = require("./2.module2")
const alternative = require("./2.module3alternativemethod")
const mindgrenade = require("./3.mindgrenade")
console.log(mindgrenade.num1)
// require("./3.mindgrenade")

// sayHello.sayHello(person.person1)
// console.log(alternative.obj.animal);
// console.log(alternative.obj.jeez.animal);