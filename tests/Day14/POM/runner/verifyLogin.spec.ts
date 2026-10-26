import test from '@playwright/test'
import { LoginPage } from '../pages/login'
import { HomePage } from '../pages/home'
//this follows the page object model, where each page is represented as a class and each class will have the methods which are related to that page.
//all pages are imported in the test file and then we can create the object of the class and then we can call the methods of that class.
//100 pages then 100 imports and 100 objects
//each page is represented as a class and each class will have the methods which are related to that page.
//builder pattern is used to create the object of the each and every class and then we can call the methods of that class.
//for every page there will class and objects needs to be created for all page, so that much heap memory will be used, so to avoid that we can use the concept of inheritance, so that we can create the object of the parent class and then we can call the methods of the child class.
test('TC001 - Verify the login functionality',async({page})=>{
    const lp =new LoginPage(page)
    await lp.enterUrl("https://orgfarm-7ab5008399-dev-ed.develop.my.salesforce.com/")
    await lp.enterUsername("bhuvanesh.qeagle.1ce512d00545@agentforce.com")
    await lp.enterPassword("Testleaf@2027")
    await lp.clickLoginButton()
    
    const hp = new HomePage(page)
    await hp.clickAppLauncher()
    await hp.clickAllButton()
    await hp.enterSearchField("sales")
    await hp.selectApp()
})