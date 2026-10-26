import test from '@playwright/test'
import credentials from '../../data/testData.json'


test.describe.serial("create lead",async()=>{//test.describe.serial --> to run the test cases in serial manner 
    //test.describe.parallel --> to run the test cases in parallel manner by default test.describe.parallel is used
    for(let credential of credentials){
        test(`salesforce login using the role:${credential.TcaseId}`,async({page})=>{
        await page.goto('https://testleaf.my.salesforce.com/');
        const Salesforcelogin = await page.getByAltText("Salesforce login").isVisible()
        console.log(`visibitly status of SF Icon ${Salesforcelogin}`)
        await page.getByRole("textbox", { name: 'Username' }).fill("bhuvanesh.moorthy@testleaf.com")
        await page.getByLabel("Password",{exact: true}).fill("Qeagle@2027")
        await page.getByRole("button",{ name :'Log In'}).click()
        await page.getByRole("textbox", { name: 'FirstName' }).fill(credential.firstName)
        await page.getByLabel("LastName",{exact: true}).fill(credential.lastName)
        await page.getByLabel("Company",{exact: true}).fill(credential.companyName)
        await page.getByRole("button",{ name :'Create Lead'}).click()
        })
    }
})