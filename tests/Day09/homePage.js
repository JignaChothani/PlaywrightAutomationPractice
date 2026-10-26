"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const learnInherit_1 = require("./learnInherit");
class HomePage extends learnInherit_1.PlaywrightWrapper {
    clickCrmLink() {
        this.clickElement();
        this.takeSnap();
    }
    clickLogoutButton() {
        this.clickElement();
        this.takeSnap();
    }
    // over riding
    captureToken() {
        //  this --> new HomePage() [current class level reference] 
        // super.captureToken() // parent class
        console.log("Now token is captured  is  the home page");
    }
}
// object creation
const home = new HomePage();
home.clickCrmLink();
home.clickLogoutButton();
home.captureToken();
