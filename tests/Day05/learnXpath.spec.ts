import test from "@playwright/test";
//xpath is used to locate the element based on the relationship between the elements in the DOM structure

//absolute path - /html/body/div[2]/div[2]/div/form/p[1]/input. (not recommended as it is brittle 
// and can break easily with any change in the DOM structure)(traversing from root to the element we want to interact with)

//relative path - //input[@id='username']
//syntax - //tagname[@attribute='value']

test("Learn xpath", async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/login")
//example 1 - attribute based xpath 
    await page.locator("//input[@name='USERNAME']").fill("democsr")
//example 2 - text based xpath -- using text function to locate element based on its text content
//syntax - //tagname[text()='text value']
   const labelContent = await page.locator(`//label[text()='Password']`).innerText() //backtip  is used to write the xpath
    console.log(labelContent)
//example 3 - collection based xpath
//syntax - (//tagname[@attributeName='value'])[indexCount] (index count starts from 1)
    await page.locator("(//input[@class='inputLogin'])[2]").fill("crmsfa")
//example 4 - partial match or contains based xpath
//syntax - //tagname[contains(@attributeName,'partialValue')]
// /h2[contains(text(),'Welcome')] (locating element based on partial text match using text function)
    await page.locator("//input[contains(@class,'decorativeSubmit')]").click()
})

//axes path - used to locate element based on its relationship with other elements in the DOM structure

//syntax - //tagname[@attribute='value']/axis::tagname (axis can be parent, child, sibling, ancestor, descendant)
//example - //input[@id='username']/parent::p (locating the parent element of the input field with id 'username')

// 1 - parent to child
//syntax - //tagname[@attribute='value']/child::child tagname (single slash is traversing from parent to child, 
// double slash is traversing from any ancestor to descendant)(//relative xpath of parent/child tag)
//example - //p[@class='top']/label (locating the input field which is a child of the p element with class 'top')

//2 - child to parent
//syntax - //tagname[@attribute='value']/parent::parent tagname(//relative xpath of child and then parent tag)
//example - //input[@id='username']/parent::p (locating the parent element of the input field with id 'username')

//3 - GrandParent to GrandChild
//syntax - //tagname[@attribute='value']/grandchild(descendant)::tagname(//relative xpath of grandparent/descendant(grandchild)tag)
//example - //form[@id='login']/label (locating the input field which is a descendant of the form element with id 'login')


//4 - GrandChild to GrandParent
//syntax - //tagname[@attribute='value']/grandparent/ancestor::tagname (//relative xpath of grandchild and then grandparent tag)
//example - //input[@id='username']/ancestor::form (locating the form element which is an ancestor of the input field with id 'username')

//5 - elder sibling to younger sibling
//syntax - //tagname[@attribute='value']/following-sibling::tagname (//relative xpath of elder sibling and then younger sibling tag)
//example - //label[text()='Username']/following-sibling::input (locating the input field which is a following sibling of the label element with text 'Username')

//6 - younger sibling to elder sibling
//syntax - //tagname[@attribute='value']/preceding-sibling::tagname (//relative xpath of younger sibling and then elder sibling tag)
//example - //input[@id='username']/preceding-sibling::label (locating the label element which is a preceding sibling of the input field with id 'username')


//7 - cousin based xpath
//syntax - //tagname[@attribute='value']/following::tagname (//relative xpath of the element and then the cousin tag)
//syntax - //tagname[@attribute='value']/preceding::tagname (//relative xpath of the element and then the cousin tag in reverse direction)
//example - //label[text()='Username']/following::input[1] (locating the first input field which is a following element of the label element with text 'Username')  
//example - //span[@id='username']/preceding::div/input (locating the first label element which is a preceding element of the input field with id 'username')