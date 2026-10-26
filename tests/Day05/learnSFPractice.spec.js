"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("@playwright/test"));
(0, test_1.default)("Salesforce Login Practice", async ({ page }) => {
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
    await page.locator("#password").fill("TestLeaf@2025");
    await page.locator("input[name='Login']").click();
    await page.locator(".slds-icon-waffle").isVisible();
});
