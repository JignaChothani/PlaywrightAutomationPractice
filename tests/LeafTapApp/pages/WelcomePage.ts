import { LoginPage } from "./LoginPage";

export class WelcomePage extends LoginPage {

    async clickCRMImg(){
    await this.page.locator(`//img[@src='/opentaps_images/integratingweb/crm.png']`).click()
    }
}