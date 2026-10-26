// async function getText(){
//     return "playwright"
// }
// console.log(getText())  //Promise { 'playwright' }, why is it showing promise ? 
// because async function always return a promise and the value is wrapped inside the promise object and it is resolved with the value "playwright"
// return promise internally
// what is promise ? it is javascript object that represents the future result of an 
// asynchronous operation and it can be in only one of three states pending, fulfilled, rejected
// promise --> javascript Object that represents the future result of an asynchronous operation.

// A Promise can be in only one of three states.
//promise -->javascript object
// pending // fulfilled // rejected

function verifyLogin(){
    return new Promise((resolve,reject)=>{//resolve and reject are declared as variable and they are function parameters 
    // and they are used to resolve or reject the promise based on the condition
       let auth=true
        // authorization permission
        if(auth==true){
            resolve("Logged in successfully")
        }else{
            reject("Retry Login")
        }
    })
}
verifyLogin().then(result=>{console.log(result)}).catch(error=>{console.log(error)})