function findLongestWord(str) {
  const words = str.trim().split(/\s+/);// Split the string into an array of words using whitespace as the delimiter
  let longest = "";// Initialize a variable to keep track of the longest word found so far
  for (const word of words) {   // Iterate through each word in the array
    if (word.length > longest.length) {// If the current word is longer than the longest word found so far
      longest = word;// Update the longest word to be the current word
    }
  }
  return longest;// Return the longest word found in the string
}

const result = findLongestWord("Automation testing is incredibly important");
console.log(result); // Output: "incredibly"

//That line is a for...of loop, which is used to iterate over items in an iterable collection, like the array of words we created.
//Here's how it works:
//const word: Creates a temporary variable for the current item in each loop.
//of words: Specifies the array (words) being looped through.
//On each loop, it grabs the next word from the array, assigns it to word, and runs the code inside the block.

//easy way to understand the code is to use for loop with index and 
// compare the length of each word with the longest word found so far. If the current word is longer, update the longest word variable. 
// Finally, return the longest word after checking all words in the string.

let sentence = "Automation testing is incredibly important"; //index = 0,1,2,3,4
                                                            // length = 1,2,3,4,5
let words = sentence.split(" ");
let longest=[]
console.log(words);
for (let index = 0; index < words.length; index++) {
	console.log(words[index].length);

  if (words[index].length>longest.length) { // 9>0 true
       longest = words[index]
  }    /* longest = "Automation" */ 
 }

console.log(longest);