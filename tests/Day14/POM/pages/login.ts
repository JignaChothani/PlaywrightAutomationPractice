import { Page } from "@playwright/test";


export class LoginPage{

    page:Page //declared Globally so can be used in all the methods of this class

    constructor(page:Page){ // page is local variable, 
    // constructor is used to initialize the page instance which is received from the runner package
       this.page =page //initalized with the page instance which is received form the runner package
    }
    async enterUrl(url : string){
        await this.page.goto(url);
    }
    async enterUsername(uname : string){
    await this.page.getByRole("textbox", { name: 'Username' }).fill(uname)
    }
    async enterPassword(pword : string){
    await this.page.getByLabel("Password",{exact: true}).fill(pword)
    }
    async clickLoginButton(){
    await this.page.getByRole("button",{ name :'Log In'}).click()
    }
}