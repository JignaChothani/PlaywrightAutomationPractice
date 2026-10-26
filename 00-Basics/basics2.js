const flag = true;

if(!flag){
    console.log("condition satisfied");
}
else{
    console.log(flag);
    console.log("condition not satisfied");
}

//where do you use this in automation if you have 25 links so you can use this and click on all the links one by one,
//  you can use this in loops and functions as well.

let i = 0;

while(i<10){
    i = i + 1;
    console.log(i);
}

//do while , 1 round conditionof loop will run before it checks the condition, even if the condition is false, 
// it will run at least once
do{
   i++
   console.log("i = " + i);
}
while(i<10);
console.log(i);

//2 and 5
//from 1 to 10 give me common multiple values of 2 and 5
console.log("************************************************");
for (let j = 1; j<=10; j++){
    if(j%2 == 0 || j%5 == 0){
    console.log("j = " + j);
}
}

console.log("************************************************");
let n = 0;
for (let k = 1; k<=100; k++){
    if(k%2 == 0 && k%5 == 0){
        n++;
    console.log("k = " + k);
    if(n == 3){
        break;
    }
}
}