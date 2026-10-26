"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const learnInherit_1 = require("./learnInherit");
class LoginPage extends learnInherit_1.PlaywrightWrapper {
    enterUsername() {
        this.fill();
        this.takeSnap();
    }
    enterPassword() {
        this.fill();
        this.takeSnap();
    }
    clickLoginButton() {
        this.clickElement();
        this.takeSnap();
    }
}
// object creation
const login = new LoginPage();
login.enterUsername();
login.enterPassword();
login.clickLoginButton();
login.captureToken();
