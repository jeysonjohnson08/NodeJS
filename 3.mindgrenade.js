const num1 = 5;
const num2 = 10;

function addition(){
console.log(`The addtion of two values are : ${num1+num2}`)
}

addition();
// if i require this file in some other file the addition method will be called 
//even when we dont export anything.


// you can't access the variables or call the uncalled function outside of this 
//function without exporting. 

// the outside function which has require to this file can print the functions
//which are called in this function 