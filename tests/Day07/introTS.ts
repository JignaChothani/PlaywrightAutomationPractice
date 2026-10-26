// Statically typed

//here when declaring variables explicilty mentioning data type
let firstName:string = "telegram"
console.log(firstName)
let phone:number =98676
let isInsured:boolean = true

function add(a:number,b:number): number{
   return a+b
}
console.log(add(873,43))
// typescript datatypes : string,number,boolean, null, undefined , // any, unknown, never // tuple


// any --> it will disable the typescripts static typing charactersitic and make it dynamic chracteristics

//let response:any ="Success"
//response=200
// console.log(response.toUpperCase()) --> exception shoot's at run time 
//drawback of any it will not show error during compile time , it will show at run time

// unknown -->  it will enable/perform the data type validation
let response:unknown ="Success"
//response=200
if(typeof response === 'string' ){//type of narrowing
console.log(response.toUpperCase())
}else{
    console.log("the received datatype is not string")
}

// never --> it returns nothing, cannot have a reachable end point, control is not returned to the caller
//  1. infinte 2. forcefully terminate the execution
//never as return type the it will go into infinte loop
// function stopFunction(message : string):never{
// throw new Error(message)
// }
// stopFunction("terimate the execution")
//fast fail test case then it has to be terminated then you need to use the same

// tuple --> A fixed-length array with different data types at specific positions.
let mentorNames :[string,string,number] =["Vinoth","Gauthami",123]
// tuple ==> 0 === string
// tuple ==> 1 === string
// tuple ==> 2 === number