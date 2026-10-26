console.log("Hello, World!");

//no need to mention delibrately the data type of the variable, it will be automatically assigned by the compiler
//var is used to declare a variable, but it is not recommended to use it in modern JavaScript. 
// ES5 and earlier versions of JavaScript used var to declare variables, but it has some issues with scoping and hoisting. It can lead to unexpected behavior and bugs in your code.
//let and const are the new ways to declare variables in JavaScript.
// ES6 introduced let and const, which are block-scoped and have better scoping rules than var.

//to declare a variable give let and const keywords no need to give data type to the variable, it will be automatically assigned by the compiler
let a = 10;
console.log(typeof(a));
console.log(a);

let b = 234.6;
console.log(typeof(b));
console.log(b);

let c = "Hello!";
console.log(typeof(c));
console.log(c);

let d = true;
console.log(typeof(d));
console.log(d);
//negation operator is used to negate the value of a boolean variable , applicable only for boolean data type
console.log(!d);
//null and undefined are also data types in JavaScript

//let c = a+b;(it did not work because we cannot redeclare the variable declared with let and const keywords 
// but can do with var keyword,)
c = a + b; //reassignment is possible with let and var keywords but not with const keyword
//console.log(typeof(c));
console.log(c);
//var c = a + b; (it will work because we can redeclare the variable declared with var keyword )

//we cannot redeclare the variable declared with let and const keywords but can do with var keyword,

