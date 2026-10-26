//array -> non primitive data type
//console.log(typeof [])//function
//arrays [],
//, separator
let course = ["play wright", "cypress", "selenium", "puppeteer"] //literal way of creating an array 

//zero based index -->value 1 --> index 0, value 2 --> index 1, value 3 --> index 2, value 4 --> index 3
console.log(course)
console.log(course[0])
console.log(course[course.length-1])//last value of the array
//property --> length
console.log(course.length)//1.based on count
//array helper methods --> add a value to array or remove a value from array or modify a value in array
//add a value to array --> push(), un shift()
//push() --> add a value to the end of the array
course.push("testcafe")//add a value to the end of the array
console.log("updated course after push:", course)
//unshift() --> add a value to the beginning of the array
course.unshift("webdriverio")//add a value to the beginning of the array
console.log("updated course after unshift:", course)
//remove a value from array --> pop(), shift()
//pop() --> remove a value from the end of the array
course.pop()//remove a value from the end of the array
console.log("updated course after pop:", course)
//shift() --> remove a value from the beginning of the array
course.shift()//remove a value from the beginning of the array
console.log("updated course after shift:", course)
//modify or replace a value in array --> index assignment
course[1] = "cypress io"//modify or replace a value in array
console.log("updated course after modification:", course)  
//splice() --> add, remove or modify a value in array based on index
//add a value in array based on index --> splice(startIndex, 0, value)
course.splice(2, 0, "testcafe")//add a value in array based on index
console.log("updated course after splice add:", course)
//remove a value from array based on index --> splice(startIndex, deleteCount)
course.splice(1, 2)//remove a value from array based on index
console.log("updated course after splice remove:", course)
//modify a value in array based on index --> splice(startIndex, deleteCount, value)
course.splice(1, 1, "cypress io")//modify a value in array based on index
console.log("updated course after splice modify:", course) 

for (let i=0; i<course.length; i++){
    console.log(course[i])
}

//instanstian way of creating an array
let objArray = new Array("play wright", "cypress", "selenium", "puppeteer")
console.log(typeof objArray)
console.log(objArray)

let value =objArray.concat(course)
console.log(value)
let sortedValue = value.sort()//sort the array in ascending order
console.log(sortedValue)
let reversedValue = value.reverse()//reverse the order of the array
console.log(reversedValue)

//slice() --> extract a portion of the array based on index and return a new array
let slicedValue = value.slice(1, 4)//extract a portion of the array based on index and return a new array
console.log(slicedValue)