import test, { expect } from '@playwright/test'
// Global Variable declaration and initialization
let serviceUsername:string="admin"
let servicePasswrod:string="Af!ExO*vL2i5"
// (btoa is a method which is used to encode the username and password in base64 format)
const encoder =btoa(`${serviceUsername}:${servicePasswrod}`)
let userId:any
let incidentNum:any

test.describe.serial("Perform API method chaining",async()=>{
test('Create an Incident using playwright api',async({request})=>{
    //step 1: Identify the HTTP method->POST
    //step 2 - provide the correct URL
    //step 3- request headers->Authorization,Accept,Content-Type
    //step 4- request body->short_description,urgency,description
    //step 5- validate the response status code and response body   

   const responseBody=await request.post("https://dev420533.service-now.com/api/now/table/incident",{
    //optional object pattern 

        headers:{
            "Authorization":`Basic ${encoder}`,
            "Accept":'application/json',
            "Content-Type":'application/json'
        },data:{
           "short_description":"Asset(DELL-1234) is not rebooting, created using Playwright API Request Context",
           "urgency":"2",
           "description":"this request is solely created using the  Playwright API Request Context not using the Ui" 
        }
    })
    //serialize the response body object to json format and store the sys_id and number in a variable
     let jsonBody =await responseBody.json()
     userId =jsonBody.result.sys_id
     incidentNum =jsonBody.result.number
     console.log(responseBody.status())
     //.log(await responseBody.text())
     console.log(userId,incidentNum)
})

test("Fetch particular resource from the table",async({request})=>{
    const response = await request.get(`https://dev420533.service-now.com/api/now/table/incident/${userId}`,
        {
            headers:{
                Authorization:`Basic ${encoder}`,
                Accept:'application/json'
            }
        }
    )
    console.log(response.status())
    const body= await response.json()
    expect(body.result.number).toBe(incidentNum)
})
test("Update the particular resource from the table",async({request})=>{
    const response = await request.patch(`https://dev420533.service-now.com/api/now/table/incident/${userId}`,
        {
            headers:{
                Authorization:`Basic ${encoder}`,
                Accept:'application/json',
                "Content-Type":'application/json'
            },
            data:{
                "short_description":"Asset(DELL-1234) is not rebooting, created using Playwright API Request Context",
                "urgency":"1",
                "description":"this request is solely created using the  Playwright API Request Context not using the Ui"
            }
        }
    )
    console.log(response.status())
    const body= await response.json()
    expect(body.result.urgency).toBe("1")
})
})