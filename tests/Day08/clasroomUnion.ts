type PaymentMethod = "UPI"|"CreditCard"|"PayPal"
function choosePaymentMethod(selectPaymentmethod:PaymentMethod){

    switch(selectPaymentmethod){
        case "UPI":
            console.log("UPI Payment method")
            break;
        case "CreditCard":
            console.log("CreditCard Payment method")
            break;
        case "PayPal":
            console.log("PayPal Payment method")
            break;
        default:
            console.log("unsupported Payment method")
}}
choosePaymentMethod("CreditCard")
choosePaymentMethod("UPI")
choosePaymentMethod("PayPal")
//choosePaymentMethod("CC")