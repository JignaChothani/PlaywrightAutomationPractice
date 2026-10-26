import test, { expect } from '@playwright/test'
import path from 'path' // path is a node module(internal object that is available under node) which helps to get the path of the file

test("classwork file upload practice",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')
    const[eventBasedUpload] =await Promise.all([page.waitForEvent('filechooser'),
    page.locator(`//input[@id = 'file-upload']`).click()])
    await eventBasedUpload.setFiles(path.join(__dirname,'../../data/QeagleLogo.jpeg')) 
    page.locator(`//input[@id = 'file-submit']`).click() 
    await expect(page.locator(`//div[@class='panel text-center']`)).toHaveText(/QeagleLogo.*/)    
    })