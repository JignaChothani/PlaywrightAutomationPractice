import test from "@playwright/test";

test("Salesforce Login Practice", async ({ page }) => {
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("input[name='Login']").click()
    await page.locator(".slds-icon-waffle").isVisible()
})