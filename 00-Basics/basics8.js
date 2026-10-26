//want o call class that is in another file we need to export that class and then import it in this file
//when we import class we need to store it in variable and then we can create object for that class
const Person = require("./basics7")
//object for class
let person = new Person("Tom", "Hanks");
let person1 = new Person("Brad", "Pitt");
console.log(person.age)
//when we do automation we create all page objects as properties of class and 
// then we can use those properties in our test cases
console.log(person.location)
console.log(person.fullName())
console.log(person1.fullName())