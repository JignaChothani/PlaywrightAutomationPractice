import { Browser } from "./classworkBrowser"

class Chrome extends Browser{
    openIncognito():void{
    console.log("Browser opened in Incognito mode ")
    }
    clearCache():void{
    console.log("Cache is cleared ")
    }
    // over riding
    public openURL(): void { 
        super.openURL()
        console.log("URL opened from chrome class")
    }
}
// object creation
const chrome = new Chrome()
chrome.openIncognito()
chrome.clearCache()
chrome.openURL()