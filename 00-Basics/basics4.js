//block of code
//declare a function with function keyword and add is name of the function 
// and a and b are parameters of the function
var greet = "morning";//global variable, we can access this variable anywhere in the code

if (1 == 1) {
    var greet = "evening";//this will overwrite the global variable greet because 
    // var is function scoped and not block scoped, 
    // so it will be accessible outside the if block 
    // and it will overwrite the global variable greet
}


 function add(a, b) {
    var greet = "hello";//scope is only inside the function, 
    // we cannot access this variable outside the function
    return a + b;
 }
//called the function and passed 2 and 3 as arguments to the function and 
// stored the result in sum variable(or ctached the return value of the function in sum variable)
 let sum = add(2, 3);
    console.log("sum is: " + sum);


//do not have name =>anyonymous function -- function expressions

let sumofIntegers = function (a, b) {
    return a + b;
} 
console.log("sum of integers is: " + sumofIntegers(8, 6));

//arrow function or fat pipe function
let sumofInt = (a, b) => a + b; //this is the same as the above function expression but with arrow function syntax
console.log("sum of int is: " + sumofInt (5, 6));


//var and let variables 
//var is function scoped and let is block scoped, 
// so if we declare a variable with var inside a block 
// then it will be accessible outside the block 
// but if we declare a variable with let inside a block 
// then it will not be accessible outside the block

//then is block level scope and var is function level scope, 
// so if we declare a variable with var inside a block 
// then it will be accessible outside the block 
// but if we declare a variable with let inside a block 
// then it will not be accessible outside the block