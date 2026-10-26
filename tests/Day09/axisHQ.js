"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxisHeadOffice = void 0;
class AxisHeadOffice {
    //  [liberal abstraction] 
    headOfficeLocation() {
        console.log("Axis hq is Mumbai");
    }
}
exports.AxisHeadOffice = AxisHeadOffice;
// new AxisHeadOffice() --> Cannot create an instance of an abstract class.
// abstract classes will always be considered as incomplete class
