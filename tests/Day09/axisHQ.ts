export abstract class AxisHeadOffice{
//  [liberal abstraction] 

headOfficeLocation():void{
    console.log("Axis hq is Mumbai")
}

abstract loanApproval():void;// hide properties 

}
// new AxisHeadOffice() --> Cannot create an instance of an abstract class.
// abstract classes will always be considered as incomplete class