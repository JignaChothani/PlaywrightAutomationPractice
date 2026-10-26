function launchBrowser(browserName){
let browser=browserName
        if(browser ==='Chrome')
            {
                return "Chrome Browser is launched"
            }
        else 
            {
                return "Edge Browser is launched"
            }
}
console.log(launchBrowser('Chrome'));

function runTests(testType){
    switch (testType){
        case "smoke":
            console.log("Smoke Test is running")
            break
        case "sanity":
            console.log( "sanity test is running")
            break
        case "regression":
            console.log( "Regression test is running")
            break
        default:
        console.log("Smoke Test is running")
        break
    }
}

runTests('smoke');