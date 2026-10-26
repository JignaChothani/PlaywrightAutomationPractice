//named function function greet(name){
//    console.log(`${name} welcome to testleaf`)
//}
//greet("Bhuvanesh")

//anonymous function/Function expression
//function without name is called anonymous function and it is stored in a variable

let greet=function(name){
    console.log(`${name} welcome to testleaf`)//other way of concatination is template literal '`' and ${} is used to inject the variable value in the string
}
greet("Bhuvanesh")

// arrow function 
//()=>{}
let add =(a,b)=>a+b  // function written withing single line of expression 
console.log(add(12,18))   
console.log(add(76,973)) 

//setTimeout() --> CallBack()
// Scenario : Amazon Prime Launching Page
//recommended movies--> History
function watchMovie(user,history,recommended){
    if(user=="bhuvanesh"){
     console.log("Login is successfully")
     history() 
     recommended()
     console.log("Movie start to play")
    }
}

function recommendedMovies(){
    console.log("Movie list is created based on history")
}
function userWatchHistory(){
    console.log("Tracking the user opion")
}

watchMovie("bhuvanesh",userWatchHistory,recommendedMovies)