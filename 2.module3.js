// first way of importing
// const { person1, person2 } = require("./2.module1");
// const { sayHello } = require("./2.module2");

// second way

const person = require("./2.module1");
const sayHello = require("./2.module2")

sayHello.sayHello(person.person1)