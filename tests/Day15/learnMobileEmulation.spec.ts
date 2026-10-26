import {test,devices} from "@playwright/test";
//Object.keys(devices) will give you all the available devices in playwright//Object is super class in TS   
//and keys is a static method which will give you all the keys of the object
console.log(Object.keys(devices))

test.use({...devices['Galaxy A55'],
    headless:false})
test('Validate the Mobile browser emulation',async({page})=>{
    await page.goto('https://testleaf.my.salesforce.com/');
    const Salesforcelogin = await page.getByAltText("Salesforce login").isVisible()
    console.log(` visibitly status of SF Icon ${Salesforcelogin}`)
    await page.getByRole("textbox", { name: 'Username' }).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel("Password",{exact: true}).fill("TestLeaf@2025")
    await page.getByRole("button",{ name :'Log In'}).click()
})