import { Browser } from "./classworkBrowser"

class Edge extends Browser{
    takeSnap():void{
    console.log("Screencapture taken")
    }
    clearCookies():void{
    console.log("Cookies is cleared ")
    }
    // over riding
    public navigateBack(): void { 
        super.navigateBack()
        console.log("Navigate URL from edge class")
    }
}
// object creation
const edge = new Edge()
edge.takeSnap()
edge.clearCookies()
edge.navigateBack()