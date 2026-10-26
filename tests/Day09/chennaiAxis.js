"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axisHQ_1 = require("./axisHQ");
// implementation class // concrete class
class ChennaiBranch extends axisHQ_1.AxisHeadOffice {
    loanApproval() {
        console.log("loan approval should be sanction from the Head office");
    }
    upiPayment() {
        console.log("NPCI will maintain the upi transaction records");
    }
    repoRate() {
        console.log('Repo Rate: 5.25%');
    }
    kycMandatory() {
        console.log("AADAR and PAN card linking is mandatory");
    }
}
const axisBank = new ChennaiBranch();
axisBank.repoRate();
axisBank.kycMandatory();
axisBank.upiPayment();
axisBank.headOfficeLocation();
axisBank.loanApproval();
