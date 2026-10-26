"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("Learn Dropdown handling", async ({ page }) => {
    //dropdown are of 2 type
    //1. select dropdown
    //2. non select dropdown
    //you can select the values from dropdown in multiple ways
    //value?: string; ---> attribute value
    //label?: string; ---> visible text
    //index?: number; ---> using order arrangement
    await page.goto("https://leafground.com/select.xhtml");
    const dropdownValues = await page.locator(`//select[@class='ui-selectonmenu']/option`).all;
    //for(const element of dropdownValues){
    //    console.log(element.innerText())
    //}
    //traditional way for select dropdown
    for (let index = 0; index < dropdownValues.length; index++) {
        console.log(await dropdownValues[index].innerText());
    }
    //if it is traditional select dropdown, then use selectOption()function
    await page.selectOption(`//select[@class='ui-selectonmenu']`, { label: 'Playwright' });
    //{value: 'LEAD_DIRECTMAIL'}
    await (0, test_1.expect)(page.locator(`//select[@class='ui-selectonmenu']`)).toHaveValue('Playwright');
    await page.selectOption(`//select[@class='ui-selectonmenu']`, { index: 0 });
    await page.locator(`//label[text()='Select Country']`).click();
    await page.getByRole('option', { name: "India" }).click();
});
