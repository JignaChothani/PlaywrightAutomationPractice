//in single container stored values in key and value form
//so to store data as properties we use literals in key and value pair //easy to maintain
const EmpInfo:{
    empId : number,
    role : string,
    isMidTermAdjusted : boolean
}
={
empId : 1274, //here I am declaring properties hence colon
role : "SDET",
isMidTermAdjusted : true
}
console.log(EmpInfo.empId, EmpInfo.role)
// in above way as well you need to declare data type so to have customizable the data type then we opt for type aliasing

//type aliasing //this operation is called union operation (|), pipe symbol
// union operation (|) --> Combines multiple types into one
// syntax : type typeName = datatype | datatype
// or
// syntax : type typeName = value | value
type username = string|number
let uname:username = "brit@gmail.com"
uname = 46544

type standBrowser = "Chrome"|"edge"|"firefox"
let selectBrowser :standBrowser="firefox"

// intersection (&) --> Combines multiple types into one with all properties included
// type basicInfo =  number |string
// type insured = boolean
// type empinfo = [number & string & boolean]
// let seeniEmp:empinfo={
//     empId:83736,
//     role :"jr.SDET",
//     isInsured:true
// }


