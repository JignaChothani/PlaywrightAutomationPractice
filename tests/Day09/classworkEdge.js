"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classworkBrowser_1 = require("./classworkBrowser");
class Edge extends classworkBrowser_1.Browser {
    takeSnap() {
        console.log("Screencapture taken");
    }
    clearCookies() {
        console.log("Cookies is cleared ");
    }
    // over riding
    navigateBack() {
        super.navigateBack();
        console.log("Navigate URL from edge class");
    }
}
// object creation
const edge = new Edge();
edge.takeSnap();
edge.clearCookies();
edge.navigateBack();
