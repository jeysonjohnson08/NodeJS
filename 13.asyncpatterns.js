const { error } = require("console")
const {readFile} = require("fs")
const { reject } = require("lodash")
const { resolve } = require("path")

// const file1 = readFile("./content/folder1/textfile1.txt",{encoding:"utf-8"},(err,data)=>{
// if(err){
//     console.log(error)
// }
// else{
//     console.log(data)
// }
// })
// console.log(1)

/*
The problem with the above way is The problem with asynchronous readFile is that it doesn't 
wait for the file reading to finish before moving on to the next line of code. This can lead to 
issues when you need the file data for further processing.

Promises solve this problem by providing a way to handle asynchronous operations in a more synchronous-like manner.
 They allow you to chain operations together and ensure that each operation is completed before moving on to the next. 
 This makes your code easier to read and maintain.

We use promises instead of callbacks because
1. Redability
2. Error handling
3. Method Chaining - readable and maintainable code compared to nested callbacks
4. promise.all() - which allows you to wait for multiple asynchronous operations to complete simultaneously
- 
*/

//using promises

// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path,"utf-8",(err,data)=>{
//             if(error){
//                 reject("There is some error")
//             }
//             else{
//                 resolve(data);
//             }
//         })

//     })
// }

// getText("./content/folder1/textfile1.txt").then

function walkDog(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
      let flag = true;
      if(flag){
        resolve("Walked the dog!")
      }
      else{
        reject("Did not walk the dog!")
      }
  
  },4000)})
  }
  
  function cleanKitchen(){
    return new Promise((resolve, reject)=>{
      let flag = true;
      setTimeout(()=>{
        if(flag){
          resolve("Cleaned the Kitchen")
        }
        else{
          reject("Did not cleaned the kitchen")
        }
      },3000)
    })}
  
  function sleep(){
    return new Promise((resolve, reject)=>{
      let flag = true;
      if(flag){
        setTimeout(()=>{
          resolve("slept properly!")
        },1000)
      }
      else{
        reject("Did not sleep properly")
      }
    })
  }

  walkDog().then((result)=>{console.log(result); cleanKitchen()})
  .then((result)=>{console.log(result); sleep()})
  .then((result)=>{console.log(result); })
  .then(()=>{console.log("All tasks completed successfully")}).
  catch((err)=>{console.log(err)})
