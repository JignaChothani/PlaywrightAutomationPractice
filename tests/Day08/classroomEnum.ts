enum environment{
    LOCAL,//0
    DEVELOPMENT,
    STAGING,
    PRODUCTION
}

function runTests(selectenvironment:environment):void{
    switch (selectenvironment) {
        case environment.LOCAL:
            console.log("Test is running on LOCAL env")
            break;
        case environment.DEVELOPMENT:
            console.log("Test is running on DEVELOPMENT env")
            break;
        case environment.STAGING:
            console.log("Test is running on STAGING env")
            break;
        case environment.PRODUCTION:
            console.log("Test is running on PRODUCTION env")
            break;
        default:
            console.log("Provide the valid status")
            break;
    }
}
runTests(environment.STAGING)
runTests(environment.LOCAL)
runTests(environment.PRODUCTION)
runTests(environment.DEVELOPMENT)