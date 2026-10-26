"use strict";
// what is mean by inheritance ?
// it increases the code reusability 
// it restricts the code duplication
// it is possible  using extends keyword
// it creates a structure --> super class/parent class [reusable code] , child class[implementor]
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaywrightWrapper = void 0;
class PlaywrightWrapper {
    // by default all methods without explict access modifiers is considered as public methods
    clickElement() {
        console.log("Element clicked successfully");
    }
    takeSnap() {
        console.log("screenshot  captured successfully");
    }
    captureToken() {
        console.log("Token is stored within storage file");
    }
    fill() {
        console.log("value entered successfully");
    }
}
exports.PlaywrightWrapper = PlaywrightWrapper;
