"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("@playwright/test"));
//test is wrapper around the test function provided by Playwright, binding layer
// which allows us to write tests in a structured way. 
// It provides various methods and hooks to set up and tear down tests,
//  as well as to make assertions about the behavior of the application being tested.
//test we need to provide test name and async functionality 
// which will contain the test code.(body of the test)
//arrow function as async function to allow us to use await inside the test body
//  which is essential for handling asynchronous operations in Playwright tests.
(0, test_1.default)("Launch Browser using local configuration", async ({ page }) => {
    // page separately, 
    // we can directly use page fixtures/object provided by Playwright 
    // test runner which is already configured to launch the browser and create a new context for each test. 
    // This simplifies our test code and allows us to focus on the test logic 
    // rather than the setup and teardown of the browser.
    // Test code here
    //step 1: launch the browser using local configuration
    //const browser = await chromium.launch()
    //step 2: create a new browser context
    //const context = await browser.newContext()
    //step 3: create a new page
    //const page = await context.newPage()
    //step 4: navigate to the desired URL
    await page.goto("https://leaftaps.com/opentaps/control/main");
    //step 5: print the title of the page
    const title = await page.title();
    console.log("Title of the page is: ", title);
});
