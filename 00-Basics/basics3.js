//let marks = Array(6);
var marks = Array(6);
var marks = new Array(20, 40, 50, 60, 70, 80);
//other way to create array
var marks = [20, 40, 50, 60, 70, 80];
console.log(marks[2]);
marks[3] = 14;
console.log(marks);
console.log(marks.length);
//to append an element to the end of the array
marks.push(90);
console.log(marks);
//to remove the last element of the array
marks.pop();
console.log(marks);
//to add an element to the beginning of the array
marks.unshift(12);
console.log(marks);

console.log("index of 50: " + marks.indexOf(50));
//whether the element is present in the array or not so we can use includes method
console.log(marks.includes(120));

//break the array into two parts
var newMarks = marks.slice(2, 5);
console.log(newMarks);

var sum = 0;

for (var i = 0; i < marks.length; i++) {
    //console.log("marks is: " + marks[i]);
    sum = sum + marks[i];  
}
console.log("sum is: " + sum);

//to remove the first element of the array
marks.shift();
console.log(marks);

//reduce filter map, reduce method can be used to calculate the sum of the array
//it takes 2 parameters, first is a callback function and second is the initial value of the sum
//reduce method will iterate through the array and for each element it will call the callback function with the current value of the sum and the current element of the array
//sum is accumultator (value will change everytime)and totalmarks is the current value of the array
let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log("total is: " + total);


var scores = [12, 13, 14, 16];
//new array to store even scores//this is one way of doing and getting even scores from the array, we can also use filter method to get even scores from the array
var evenScores = [];
for (var i = 0; i < scores.length; i++) {
    if (scores[i] % 2 == 0) {
        evenScores.push(scores[i]);
    }
}
console.log("even scores are: " + evenScores);
//other simple way to get even scores from the array using filter method, 
// filter method takes a callback function as a parameter and 
// returns a new array with the elements that satisfy the condition in the callback function
//score is the current element of the array and store and we check if it is even or not, if it is even then it will be added to the new array newfilterevenscore

let newfilterevenscore = scores.filter(score => score % 2 == 0);
console.log("even scores using filter method: " + newfilterevenscore);

//when to use reduce method and when to use filter method
//we can use reduce when we want to calculate or accumulate a single value from an array,
//like sum, product, etc. 

// We can use filter when we have certain conditions and want to create a new array with only 
// the elements that satisfy a certain condition example even numbers, odd numbers, etc.

// when do you use map function, 
// map fuction will update each value of the array and return a new array with the updated values, it takes a callback function as a parameter and returns a new array with the results of calling the callback function for every element in the array.
//in real time we will update values in an array, we can use map when we want to 
// create a new array with the results of calling a function for every array element.

let mappedScores = newfilterevenscore.map(score => score * 3);
console.log("even scores after multiplying by 3: " + mappedScores);
let reducedScore = mappedScores.reduce((sum, val) => sum + val, 0);
console.log("reduced score is: " + reducedScore);


//create a new aaray with even numbers of scores and multiply each value with 3 and sum them

var scores1 = [12, 13, 19, 14, 16];
let sumValue = scores1.filter(score => score % 2 == 0) // filter even numbers
    .map(score => score * 3) // multiply each even number by 3
    .reduce((sum, val) => sum + val, 0); // sum the results
console.log("final sum is: " + sumValue);


//sort method with String and numbers
let fruits = ["banana", "apple", "grapes", "orange"];

console.log("sorted asending " + fruits.sort());
console.log("sorted descending " +fruits.reverse());


var scores1 = [12, 13, 19, 14, 16, 003];
scores1.sort();
console.log("sorted scores: " + scores1);
//sort method will sort the numbers in lexicographical order, 
// so it will sort the numbers as strings,
//  so 003 will come before 12, 13, 14, 16, 19, 
// because it is smaller than all of them when compared as strings. 
// To sort the numbers in numerical order 
// we can use a compare function as a parameter to the sort method.

//scrores1.sort(function(a, b) {
//   return a - b;
//});

scores1.sort((a, b) => a - b);
console.log("sorted scores in numerical order: " + scores1);

