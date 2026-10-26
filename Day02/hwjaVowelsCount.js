function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
const result = countVowels("Playwright");
console.log(result); // Output: 2 (a, i)