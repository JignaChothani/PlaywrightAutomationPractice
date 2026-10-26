import test, { expect } from '@playwright/test'
import path from 'path' // path is a node module(internal object that is available under node) which helps to get the path of the file

//2 ways to upload a file in playwright
//1. using setInputFiles method
test("learn file upload using setInputFiles",async({page})=>{
    await page.goto('https://leafground.com/file.xhtml')
    console.log(path.join(__dirname)) // C:\SessionProjects\PW_MAY_26\tests\day10
    const fileUpload = page.locator(`//input[@type='file']`).first()
    await fileUpload.setInputFiles(path.join(__dirname,'../../data/QeagleLogo.jpeg'))
    await expect(page.locator(`.ui-fileupload-filename`)).toHaveText(/QeagleLogo.*/)
})

//2. using event listener
test.only("learn file upload using event listerner",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')
    const[eventBasedUpload] =await Promise.all([page.waitForEvent('filechooser'),
        page.locator(`div#drag-drop-upload`).click()])
    await eventBasedUpload.setFiles(path.join(__dirname,'../../data/QeagleLogo.jpeg'))  
    await expect(page.locator(`(//div[@class='dz-filename']/span)[1]`)).toHaveText(/QeagleLogo.*/)    
    })