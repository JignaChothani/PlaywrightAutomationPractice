"use strict";
// access modifier ?
// 3 - AM 
// public --> it can accessed outside the class
// protected --> it can accessed by the child class [inheritance property shall be applied]
// private --> it can be accessed within that particular class
// data enclosed with a variable or within method 
// framework --> Filename and class name should be same 
//in java file name and class name shall be same name, as after compilation it will 
// create class file here it can be different but as good practice better to follow naming convention 
class BaseClass {
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
    performTask() {
        this.takeSnap();
        this.captureToken();
    }
}
const objBase = new BaseClass();
objBase.clickElement();
objBase.performTask();
// export import extends --> decrease the code duplication, increase the code reuseablility 
