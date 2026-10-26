"use strict";
class FirstProgram {
    // signature to create Method --> function
    empInfo(isInsured) {
        // local variable    
        // 'this' is the keyword --> it represent the class level reference(to access the variable that is at class level/global variable then this keyword is required)
        console.log(`The employee name is ${this.fname}, status of midterm adjustment is ${isInsured}`); // 
    }
    //constructor is special method within class
    constructor(fname) {
        // to initialize the global variable[under scope of the class]
        console.log("This is arugment constructor");
        this.fname = fname; // intialization
    }
}
// syntax to create a object --> at run time it will create a new memory 
//using object we can access the class
// new --> keyword it invokes a call to create a new memory at run time
// FirstProgram() -->constructor of the class
const obj = new FirstProgram("Bhuvanesh");
obj.empInfo(true);
console.log(obj.fname);
// multiple object's can be created 
const obj1 = new FirstProgram("Vinoth");
obj1.empInfo(false);
console.log(obj1.fname);
