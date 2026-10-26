"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("@playwright/test")); //test is wrapper around the test function provided by Playwright, binding layer
(0, test_1.default)("Learn basic web element interaction", async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/login");
    //step 1 -locate the content under DOM structure
    //locate the content under DOM structure using locator method --by id #
    await page.locator("#username").fill("democsr");
    await page.waitForTimeout(2000);
    const passwordLabel = await page.locator("label[for='password']").innerText();
    console.log(passwordLabel);
    //step 2 -locate the passwordfield and fill the password -- by class .
    await page.locator(".inputLogin").last().fill("crmsfa");
    //Error - strict mode violation :locator('.inputLogin') has more than one element. Specify locator further.
    //solution - first() or last() or nth() method to specify the index of the element we want to interact with.
    //step 3 -locate the login button and click on it -- by class
    await page.locator(".decorativeSubmit").click();
    //step 4 -locate the crm/sfa link and click on it -
    await page.locator("#label>a").click();
});
//attribute based locator
//input[name='PASSWORD']
