//String Methods

let day ='sunday ';
console.log(day.length);
let subday = day.slice(0, 3);
console.log(subday);
console.log(day[1]);

let splitday = day.split('n');
console.log(splitday[1].length);
console.log(splitday[1].trim().length);

let date = '23';
let nextDate = '25';
let diff = parseInt(nextDate) - parseInt(date); 
//parseInt is used to convert a string to an integer, 
// it takes a string as a parameter and returns an integer, 
// if the string cannot be converted to an integer then it will return NaN (Not a Number)
console.log(diff);

diff.toString();//toString is used to convert an integer to a string,
console.log(diff.toString());

//concatenate two strings using concat method
let newDay = day + 'is a funday day';
console.log(newDay);
let val = newDay.indexOf("day",5);//indexOf is used to find the index of a substring in a string,
console.log(val);

let count = 0;
let value = newDay.indexOf("day"); 
while (value != -1) {
    count++;
    value = newDay.indexOf("day", value + 1);
}
console.log("count of day is: " + count);

let newQuote = day.concat('is a good day')
console.log(newQuote);
