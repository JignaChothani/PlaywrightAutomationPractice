"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classworkBrowser_1 = require("./classworkBrowser");
class Chrome extends classworkBrowser_1.Browser {
    openIncognito() {
        console.log("Browser opened in Incognito mode ");
    }
    clearCache() {
        console.log("Cache is cleared ");
    }
    // over riding
    openURL() {
        super.openURL();
        console.log("URL opened from chrome class");
    }
}
// object creation
const chrome = new Chrome();
chrome.openIncognito();
chrome.clearCache();
chrome.openURL();
