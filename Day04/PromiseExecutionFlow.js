//Interview Question : What is the execution flow of promise in JavaScript?
// https://event-loop-javascript-visualizer.netlify.app/

console.log('Start');
 
const promise = new Promise((resolve) => {
  console.log('Inside Promise');
  resolve('Resolved'); //---> call back will be registered
});
 
promise.then((res) => console.log(res));
 
console.log('End');

/*
Print the output :  in Execution Order

Start
Inside Promise
End
Resolved
*/
// Explanation :
// 1. When the JavaScript engine encounters the code, it starts executing from the top.
// 2. It first logs 'Start' to the console.
// 3. Then it creates a new Promise. The executor function of the Promise is executed immediately, which logs 'Inside Promise' to the console and resolves the Promise with the value 'Resolved'.
// 4. The .then() method is called on the Promise, which registers a callback to be executed when the Promise is resolved. However, this callback is not executed immediately; it is placed in the microtask queue.
// 5. The JavaScript engine continues executing the remaining code, logging 'End' to the console.
// 6. After the synchronous code has finished executing, the JavaScript engine checks the microtask queue and executes any callbacks that are waiting there. 
// In this case, it executes the callback registered by .then(), which logs 'Resolved' to the console.  