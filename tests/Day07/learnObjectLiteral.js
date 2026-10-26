"use strict";
//in single container stored values in key and value form
//so to store data as properties we use literals in key and value pair //easy to maintain
const EmpInfo = {
    empId: 1274, //here I am declaring properties hence colon
    role: "SDET",
    isMidTermAdjusted: true
};
console.log(EmpInfo.empId, EmpInfo.role);
let uname = "brit@gmail.com";
uname = 46544;
let selectBrowser = "firefox";
// intersection (&) --> Combines multiple types into one with all properties included
// type basicInfo =  number |string
// type insured = boolean
// type empinfo = [number & string & boolean]
// let seeniEmp:empinfo={
//     empId:83736,
//     role :"jr.SDET",
//     isInsured:true
// }
