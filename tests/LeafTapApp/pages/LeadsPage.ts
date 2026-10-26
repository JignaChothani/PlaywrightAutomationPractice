import { HomePage } from "./MyHomePage";

export class MyLeadsPage extends HomePage{

    async createLead(){
    await this.page.locator(`//a[@href='/crmsfa/control/createLeadForm']`).click()
    }

    async MyLeads(){
    await this.page.locator(`//a[@href='/crmsfa/control/myLeads']`).click()
    }

    async FindLeads(){
    await this.page.locator(`//a[@href='/crmsfa/control/findLeads']`).click()
    }

    async RequestCatalog(){
    await this.page.locator(`//a[@href='/crmsfa/control/createCatalogRequestForm']`).click()
    }
}