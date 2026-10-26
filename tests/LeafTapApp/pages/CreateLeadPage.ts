import { MyLeadsPage } from "./LeadsPage";

export class CreateLeadPage extends MyLeadsPage{

async enterCompanyName(companyName : string){
    await  this.page.locator(`//input[@id='createLeadForm_companyName']`).fill(companyName)
    }

async enterFirstName(firstName : string){
    await  this.page.locator(`//input[@id='createLeadForm_firstName']`).fill(firstName)
    }

async enterLastName(lastName : string){
    await  this.page.locator(`//input[@id='createLeadForm_lastName']`).fill(lastName)
    }

async clickCreateLeadbutton(){
     await  this.page.locator(`//input[@value='Create Lead']`).click()
    }
}