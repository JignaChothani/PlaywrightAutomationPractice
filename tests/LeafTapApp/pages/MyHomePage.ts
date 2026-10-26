import { WelcomePage } from "./WelcomePage";

export class HomePage extends WelcomePage {

    async clickLeads(){
    await this.page.locator(`//a[@href='/crmsfa/control/leadsMain']`).click()
    }

    async clickContacts(){
    await this.page.locator(`//a[@href='/crmsfa/control/contactsMain']`).click()
    }

    async clickAccounts(){
    await this.page.locator(`//a[@href='/crmsfa/control/accountsMain']`).click()
    }

    async clickCases(){
    await this.page.locator(`//a[@href='/crmsfa/control/casesMain']`).click()
    }
}