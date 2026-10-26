"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classworkBrowser_1 = require("./classworkBrowser");
class Safari extends classworkBrowser_1.Browser {
    readerMode() {
        console.log("Reader mode");
    }
    fullScreenMode() {
        console.log("fullScreenMode ");
    }
    // over riding
    closeBrowser() {
        super.closeBrowser();
        console.log("Browswer closed from safari");
    }
}
// object creation
const safari = new Safari();
safari.readerMode();
safari.fullScreenMode();
safari.closeBrowser();
