import { Browser } from "./classworkBrowser"

class Safari extends Browser{
    readerMode():void{
    console.log("Reader mode")
    }
    fullScreenMode():void{
    console.log("fullScreenMode ")
    }
    // over riding
    public closeBrowser(): void { 
        super.closeBrowser()
        console.log("Browswer closed from safari")
    }
}
// object creation
const safari = new Safari()
safari.readerMode()
safari.fullScreenMode()
safari.closeBrowser()