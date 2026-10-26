import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../pages/login'
import { HomePage } from '../pages/home'

//custom fixtures how many pages been handled , used using use method
//page instance as page argument is passed to the constructor of the class and then we can call the methods of that class.

//typealias is used to create the object of the each and 
// every class and then we can call the methods of that class.
type salesforceObjects={
    SFlogin : LoginPage,
    SFhome : HomePage,
}

export const test = baseTest.extend<salesforceObjects>({

    SFlogin:async ({ page }, use) => {
     const salesforceLoginPage =  new LoginPage(page)
     await use(salesforceLoginPage)
    },
     SFhome:async ({ page }, use) => {
     const salesforceHomePage =  new HomePage(page)
     await use(salesforceHomePage)
    }
})