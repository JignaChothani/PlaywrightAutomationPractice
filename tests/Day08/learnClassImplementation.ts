class FirstProgram{
// what is class ? it is blueprint or template where the properties can be packed or enclosed 
//class is a contract and properties can be called using object
//variable declaration is not required -- you want to explicitly give type then give as declaration as below
// Global variable
fname:string // declaration // Global variable

// signature to create Method --> function
empInfo(isInsured : boolean):void{ // argumented
// local variable    
// 'this' is the keyword --> it represent the class level reference(to access the variable that is at class level/global variable then this keyword is required)
console.log(`The employee name is ${this.fname}, status of midterm adjustment is ${isInsured}`) // 
}
//constructor is special method within class
constructor(fname:string){ // when a new object is created, constructor is invoked automatically
    // to initialize the global variable[under scope of the class]
    console.log("This is arugment constructor")
    this.fname=fname // intialization
}

}

// syntax to create a object --> at run time it will create a new memory 
//using object we can access the class
// new --> keyword it invokes a call to create a new memory at run time
// FirstProgram() -->constructor of the class
const obj =new  FirstProgram("Bhuvanesh")
obj.empInfo(true)
console.log(obj.fname)

// multiple object's can be created 
const obj1 =new  FirstProgram("Vinoth")
obj1.empInfo(false)
console.log(obj1.fname)