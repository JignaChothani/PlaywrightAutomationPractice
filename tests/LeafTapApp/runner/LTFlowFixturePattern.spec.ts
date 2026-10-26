import {test,expect} from "../fixtures/baseFixture"


// Your custom type alias ensures auto-complete and type safety here

test('Create Lead using LeafTaps',async({LTlogin,LThome,LTwelcome,LTleads,LTcreateLead})=>{
    await LTlogin.enterUrl("https://leaftaps.com/opentaps/control/main")
    await LTlogin.enterUsername("democsr")
    await LTlogin.enterPassword("crmsfa")
    await LTlogin.clickLoginButton()
    await LTwelcome.clickCRMImg()
    await LThome.clickLeads()
    await LTleads.createLead()
    await LTcreateLead.enterCompanyName("TestLeaf")
    await LTcreateLead.enterFirstName("John")
    await LTcreateLead.enterLastName("Dey")
    await LTcreateLead.clickCreateLeadbutton()
   // await expect(LTcreateLead.).toBeVisible();
})