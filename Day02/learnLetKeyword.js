// part 1: declaration  --> let firstName
// part 2 : initialization --> =
let course
course="Playwright" //literal way of creating a string //litrel way is primitive

let objCourse=new String("playwright")//instantiation way i snon primitive data type //object
// part 3 : reinitialization is allowed in let
course="Cypress"
console.log(course)
// part 4 : redeclaration --> is not allowed in the Let
// let course="Selenium" // SyntaxError: Identifier 'course' has already been declared
// console.log(course)

// part 5 : hoisting --> is not allowed in the let
//console.log(courseDuration) //ReferenceError ReferenceError: Cannot access 'courseDuration' before initialization
let courseDuration=" 2 months" // global reference

// part 6 : scope restriction --> is block scoped
function greetUser(){ // scope of the function
{ // scope of the block
  let empNation="India"   // local reference    
}
console.log(empNation) // ReferenceError: empNation is not defined 
}
greetUser()