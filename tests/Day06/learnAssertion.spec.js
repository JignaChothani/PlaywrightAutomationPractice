"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("Learn assertion", async ({ page }) => {
    //assertion is of two
    //1. generic assertion 
    //generic assertion will generally start with toBe() , toBeGreaterThan(0), toBeLessThan() etc (quantifying the value)
    //toBeEditbale 
    //toBeEqual() - to check the equality of two values
    //toBeTruthy() - to check if the value is truthy (not null, undefined, false, 0, NaN, or an empty string)
    //toBeFalsy() - to check if the value is falsy (null, undefined, false, 0, NaN, or an empty string)
    //toContain() - to check if an array or string contains a specific value
    //toHaveLength() - to check the length of an array or string
    //toMatch() - to check if a string matches a regular expression
    //toBeDefined() - to check if a variable is defined
    //toBeUndefined() - to check if a variable is undefined
    //toBeNull() - to check if a variable is null
    //lazy locator evaluation 
    //2. Locator based assertion (Playwright specific assertion)
    //then mandatory locator function is used to locate the element and then assertion is performed on that element
    //Playwright specific assertion will generally start with toHaveText(), toHaveAttribute(), toHaveClass(), toHaveStyle(), 
    //toBeVisible(), toBeHidden(), etc (asserting the state of the element), toHaveURL, toBeEditable, toBeEnabled, toBeDisabled, toBeChecked, toBeEmpty, toBeFocused, toBeHidden, toBeVisible, toHaveCount, toHaveValue, toHaveTitle, toHaveURL, etc (asserting the state of the element or page)
    //toHaveText() - to check if an element has specific text content
    //toHaveAttribute() - to check if an element has a specific attribute with a specific value
    //toHaveClass() - to check if an element has a specific class or classes
    //toHaveStyle() - to check if an element has a specific CSS style
    //toBeVisible() - to check if an element is visible on the page
    //toBeHidden() - to check if an element is hidden on the page
    await page.goto("https://leaftaps.com/opentaps/control/login");
    await (0, test_1.expect)(page.locator(`//input[@name='USERNAME']`)).toBeVisible(); //pass
    await page.locator("//input[@name='USERNAME']").fill("democsr");
    await (0, test_1.expect)(page.locator(`//input[@name='USERNAME']`)).toHaveValue('democsr');
    //if the assertion condition is satisfied the test will pass
    //if the assertion condition is not satisfied the test will fail
});
