//Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//typically using all the original letters exactly once. For example, the word "listen" is an anagram of "silent".

function checkAnagram(str1,str2){
    let sortedString1=str1.toLowerCase().replaceAll(" ", "").split("").sort().join("")
    let sortedString2=str2.toLowerCase().replaceAll(" ", "").split("").sort().join("")
    if(sortedString1.includes(sortedString2) && sortedString2.includes(sortedString1)){
        console.log("The given strings are anagrams")
    }else{
        console.log("The given strings are not anagrams")
    }
}
checkAnagram("listen", "Silent")
checkAnagram("Triangle", "Integral")
checkAnagram("conversation", "voices rant on")
checkAnagram("hello", "world")