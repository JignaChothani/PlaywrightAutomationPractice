import test, { expect, request } from '@playwright/test'
let SF_Access_Token:any
let authType:string ='Bearer'
let appUrl:any
let leadId:any
let pathParam:string='services/data/v65.0/sobjects'
let uri:string='Lead'

test.describe.serial('SF method chaining using API',async()=>{

test('Generate the Access token from the Oauth server',async({request})=>{
    const clientId = process.env.SF_CLIENT_ID
    const clientSecret = process.env.SF_CLIENT_SECRET
    if (!clientId || !clientSecret) {
        throw new Error('Set SF_CLIENT_ID and SF_CLIENT_SECRET before running the Salesforce API tests.')
    }

  const response= await request.post(`https://orgfarm-7ab5008399-dev-ed.develop.my.salesforce.com/services/oauth2/token`,{
        headers:{
            "Accept":'application/json',//we are expecting the response in json format so we need to set the accept header as application/json
            "Content-Type":'application/x-www-form-urlencoded'//body is in form format so we need to set the content type as application/x-www-form-urlencoded
        },form:{
            "client_id":clientId,
            "client_secret":clientSecret,
            "grant_type":"client_credentials"
        }
    })
    const body = await response.json()
    SF_Access_Token =body.access_token
    appUrl=body.instance_url
    console.log(response.status(),appUrl)
    expect(response.status()).toBe(200)
})

test('create a lead using playwright api',async({request})=>{
   const response = await request.post(`${appUrl}/${pathParam}/${uri}`,{
        headers:{
              Authorization:`${authType} ${SF_Access_Token}`,
              "Content-Type":"application/json",//body is in json format so we need to 
              //set the content type as application/json
              Accept: "application/json"//we are expecting the response in json format 
              //so we need to set the accept header as application/json
        },data:{
    "Salutation":"Mr.",
    "FirstName": "Bhuvanesh",
    "LastName": "Moorthy",
    "Company": "Alphabet - ENG"
}
})
    const body = await response.json()
    console.log(response.status())
    leadId=body.id
    expect(response.status()).toBe(201)   
})

test('fetch the lead using lead id',async({request})=>{
  const response=  await request.get(`${appUrl}/${pathParam}/${uri}/${leadId}`,{
        headers:{
             Authorization:`${authType} ${SF_Access_Token}`,
             Accept: "application/json"
        }
    })
    const body=  await response.json()
    console.log( response.status(),body.Name)
    expect(response.status()).toBe(200)
})
})