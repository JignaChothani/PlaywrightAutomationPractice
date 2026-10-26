"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("@playwright/test"));
(0, test_1.default)("learn Frame", async ({ page }) => {
    //Frame: one webpage[html] is embbeded inside the another webpage[html]
    await page.goto("https://leafground.com/frame.xhtml");
    //await page.locator(`#Click`).click()  -- this is throwing timeout error as not able t o fund in root html 
    //identify : the total number of frames within a webpage
    const totalFrameReference = page.frames(); //getting total number of frames
    const frameCount = totalFrameReference.length; //storing count of the frames
    console.log(`total frames present is ${frameCount}`); //5 it counts the main frame(root html) too along with sub frames
    for (let index = 0; index < frameCount; index++) {
        console.log(totalFrameReference[index].url());
        console.log(totalFrameReference[index].name());
    }
    //2 function frame() or framelocator()
    //implementation no 1: frame()
    await page.frame({ url: 'https://leafground.com/default.xhtml' })?.locator(`#Click`).click();
    //chaining of frame is not allowed in frame() function
    //implementation no 2: framelocator()
    const locator = await page.frameLocator(`//iframe[@src='default.xhtml']`).getByRole('button');
    await locator.click();
    //iframe3-->iframe4(frame with in frame)-->button
    const nestedFrame = page.frameLocator(`//iframe[@src='page.xhtml']`).frameLocator(`#frame2`).getByRole('button');
    await nestedFrame.click();
});
