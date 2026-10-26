import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { WelcomePage } from '../pages/WelcomePage'
import { HomePage } from '../pages/MyHomePage'
import { MyLeadsPage } from '../pages/LeadsPage'
import { CreateLeadPage } from '../pages/CreateLeadPage'

// 1. Define the Type Alias for your custom fixtures
type LeafTapObjects={
    LTlogin : LoginPage,
    LTwelcome : WelcomePage,
    LThome : HomePage,
    LTleads : MyLeadsPage,
    LTcreateLead : CreateLeadPage
}
// 2. Extend the base test using the Type Alias
export const test = baseTest.extend<LeafTapObjects>({

    LTlogin:async ({ page }, use) => {
     const LTLoginPage =  new LoginPage(page)
     await use(LTLoginPage)
    },
     LThome:async ({ page }, use) => {
     const LThomePage =  new HomePage(page)
     await use(LThomePage)
    },
     LTwelcome:async ({ page }, use) => {
     const LTwelcomePage =  new WelcomePage(page)
     await use(LTwelcomePage)
    },
     LTleads:async ({ page }, use) => {
     const LTleadsPage =  new MyLeadsPage(page)
     await use(LTleadsPage)
    },
     LTcreateLead:async ({ page }, use) => {
     const LTcreateLeadPage =  new CreateLeadPage(page)
     await use(LTcreateLeadPage)
    }
})
export { expect } from '@playwright/test';