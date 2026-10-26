// basic arithematic operation --> + - * / %
let c=4/3  // 1.3333333 -- quotient
console.log(c.toFixed(1)) // used for decimal formatting.
console.log(Math.floor(c)); // removes decimal part, returns nearest smaller integer
console.log(4%3) // 0  -- reminder


// comparision or relationship operation -->  < , >, <= ,>=, == ,!=
// relationship operation will provide the expression as either true or false 
console.log(3==4)
// incremental and decremental operator --> ++ --
let a=3
// pre incremental 
console.log(++a) // 
// post incremental
console.log(a++) // fetch the value of a first , 
console.log(a) // then it will add 1 to the varaible a
let b =-15
// pre decremental 
console.log(--b) // -16
// post decremental
console.log(b--) // -16
console.log(b)//-17

//strict equality operator (===) in JavaScript checks whether its two operands are equal by comparing both their value and their data type