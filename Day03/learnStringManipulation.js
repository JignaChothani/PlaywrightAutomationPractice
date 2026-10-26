let companyName = "Techno credits" //literal way//primitive data type//value
let objCompanyName = new String("Techno credits") //instantiation way //non primitive data type//object//memory reference
let objCompanyName1 = new String("Techno credits")//instantiation way //non primitive data type//object.// memory reference

if (companyName == objCompanyName){//value ==value but  not the data type
    console.log("both are same")
}else{
    console.log("both are different")
}

if (companyName === objCompanyName){//data type === data type
    console.log("both are same")
}else{
    console.log("both are different")
}

if (objCompanyName === objCompanyName1){//data type === data type but both are different objects in memory
    console.log("both are same")
}else{
    console.log("both are different because both are different objects in memory")
}

if(objCompanyName1.includes(objCompanyName)){
    console.log("both are same because both are different objects in memory but value is same")
}else{
    console.log("both are different because both are different objects in memory")
}//value == value but both are different objects in memory

let charSeq = companyName.split("").sort().join("")//split() --> string helper method --> split a string into an array of characters based on the separator
console.log(charSeq)

let reverseCompany = companyName.split("").reverse().join("")//reverse() --> array helper method --> reverse the order of the elements in an array
console.log(reverseCompany)

//slice() --> string helper method --> extract a portion of a string based on index and return a new string
let slicedCompany = companyName.slice(0, 6)//extract a portion of a string based on index and return a new string
console.log(slicedCompany)

let subString = companyName.substring(2, 8)//substring() --> string helper method --> extract a portion of a string based on index and return a new string
console.log(subString)

let substrCompany = companyName.substr(-7, -8)//substr() --> string helper method --> extract a portion of a string based on index and return a new string
//if neagtive value is provide d then zero is considered as start index and if the value is greater than the length of the string then the length of the string is considered as end index
console.log(substrCompany)