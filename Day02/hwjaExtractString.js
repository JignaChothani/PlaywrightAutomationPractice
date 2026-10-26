const dynamicString = "Order ID: #12345-Confirmed";
const orderId = dynamicString.split(": ")[1];
console.log(orderId); // Output: #12345-Confirmed
const orderStatus = orderId.split("-")[1];
console.log(orderStatus); // Output: Confirmed
const orderNumber = orderId.split("-")[0];
console.log(orderNumber); // Output: #12345
console.log(orderId.substring(1, 6)); // Output: 12345


let str = 'Hello World';
str[0] = 'J';
console.log(str); // Output: Hello World (strings are immutable in JavaScript) 

let amount = "$1,000.50";
console.log(amount.replaceAll(/[^0-9.]/g, "")); // Output: 1000.50
// Use replaceAll() in test automation when you need to modify strings 
// by replacing every matching instance using patterns or regular expressions, rather than just the first match
//Cleaning Price and Currency String,Stripping Special Characters, Data Masking and Redaction,Normalizing Text Formats


