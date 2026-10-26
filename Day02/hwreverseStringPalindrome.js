//code using literal declaration and using conditional statement to check whether the string is palindrome or not
let string1 = "madam"
let cleanString = string1.toLowerCase()
console.log("String is: ", cleanString) // ["m", "a", "d", "a", "m"]

let reverseString = cleanString.split("").reverse().join("")
console.log("Reverse String is: ", reverseString)

if(cleanString === reverseString){
    console.log("String is palindrome")
}else{
    console.log("String is not palindrome")
}

//code using function and using conditional statement to check whether the string is palindrome or not
function checkPalindrome(str){
    let cleanString = str.toLowerCase()
    let reverseString = cleanString.split("").reverse().join("")
    if(cleanString === reverseString){
        console.log("String is palindrome")
    }else{
        console.log("String is not palindrome")
    }
}
checkPalindrome("Madam")
checkPalindrome("Hello")
checkPalindrome("malayalam")
checkPalindrome("Testleaf") 