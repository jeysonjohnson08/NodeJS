/*
Event Loop is what allows NodeJS to perform non-blocking I/O operations
- despite the fact JavaScript is single threaded
It does this by offloading operations to the system kernal whenever possible

*/





// setTimeout(() => {
//     console.log("first time out")
// }, 2000);

// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// const res = fibonacci(50);
// console.log(res);
// setTimeout(() => {
//     console.log("second time out")
// }, 1000);

