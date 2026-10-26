import test from '@playwright/test'
import credentials from '../../data/salesforceLogin.json'

test.describe.serial("role based testing",async()=>{//test.describe.serial --> to run the test cases in serial manner 
    //test.describe.parallel --> to run the test cases in parallel manner by default test.describe.parallel is used
    for(let credential of credentials){
        test(`salesforce login using the role:${credential.role}`,async({page})=>{
        await page.goto('https://testleaf.my.salesforce.com/');
        const Salesforcelogin = await page.getByAltText("Salesforce login").isVisible()
        console.log(`visibitly status of SF Icon ${Salesforcelogin}`)
        await page.getByRole("textbox", { name: 'Username' }).fill(credential.username)
        await page.getByLabel("Password",{exact: true}).fill(credential.password)
        await page.getByRole("button",{ name :'Log In'}).click()
        })
    }
})

// public enterUsername(): void{body}
// public enterUsername(username: string): void{body}
//obj.enterUsername("democsr") // parameterization