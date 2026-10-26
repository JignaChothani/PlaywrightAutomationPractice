//datatype --> format of the input
//Employee portal of the company
//empName, empID, empAge,empPhone, empMidTerm
//empID, empAge,empPhone --> number [all the digit 0-9]
//empName --> character seq --> string [collection of characters A-Z,a-z,$]
//empMidTerm -->Yes/No --> boolean [true or false]

//syntax : keyword idetifierName assignmentOperator value
//camelCase --> everyfirst word, first character shouls be start with lowercase
var empName = "Jigna"//string - Primitive (Immutable (cannot be altered),Stack memory (stores actual value),Passed by value (independent copies),No native properties or methods,)
var empID = 1234//number - Primitive
var empAge = 25//number
var empPhone = 9876543210//number
var empMidTerm = true//boolean is a datatype which can have only two values true or false //primitive
var empLandline //undefined will not point to any memory location, it is a datatype which has only one value that is undefined, 
// it is used to indicate that a variable has not been assigned a value yet //primitive
var empParking = null //null //000 is also a datatype in javascript, historical bug in javascript, null is a primitive datatype which has only one value that is null, 
// but typeof null will give you object, this is a bug in javascript 
var empEmail = ""
//tyeof operator --> to find the datatype of the variable --> unary operator means one directional operator which works on single operand
console.log(typeof empName)//string
console.log(typeof empID)//number
console.log(typeof empAge)//number
console.log(typeof empPhone)//number
console.log(typeof empMidTerm)//boolean
console.log(typeof empLandline)//undefined
console.log(typeof empParking)//object
console.log(typeof empEmail)//string

//non primitive datatypes --> object (mutable (can be altered), heap memory (stores reference value),
//passed by reference (dependent copies), has native properties and methods)
// Object,Array, Function,date, RegExp, Map, Set, WeakMap, WeakSet, Promise, Symbol, BigInt