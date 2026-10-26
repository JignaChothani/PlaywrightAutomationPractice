//odd number //printing odd number between 1 to 20
for(let i=1;i<=20;i++){
    if(i%2!=0){
    console.log("odd number: "+i)
}
}
//even number //printing even number between 1 to 20
for(let i=1;i<=20;i++){
    if(i%2==0){
    console.log("even number: "+i)
}
}
//function to identify whether given number is odd or even
function oddoreven(number){
    if(number%2==0)
    {
        return number+ "- number entered is an even number"
    }
    else 
    {
        return number+ "- number entered is an Odd number"
    }
}
console.log(oddoreven(33))
console.log(oddoreven(32))