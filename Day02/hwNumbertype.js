function numberType(test){
    if(test>0)
        {
            return "greater than zero, number is positive"
        }
    else if(test<0)
        {   
            return " less than zero"
        }
    else
        {
            return " equals to zero, number is zero"
        }
}
console.log(numberType(-20));
console.log(numberType(0));
console.log(numberType(3));