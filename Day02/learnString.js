// string 
let course="play wright"// literal way //what is literal way --> when we assign value to the variable directly without using new keyword
//let course1=new String("play wright")// object/instance way //what is object way --> when we assign value to the variable using new keyword
//console.log(typeof course)//string
//console.log(typeof course1)//object
let uc = course.toUpperCase()
console.log(uc)
console.log(course.length)
console.log(course.charAt(10).toUpperCase())
console.log(course.slice(-3))
console.log(course.replace(" ","@"))//this will replace only first occurrence of space with @
console.log(course.replaceAll(/[a-z0-9]/g,"@"))//this will replace all occurrence of small letters and numbers with @
console.log(course.indexOf("p"))