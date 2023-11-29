/*
Longest vowel chain

The vowel substrings in the word 'codewarriors' are 'o, e, a, io'.
The longest of these has a length of 2. Given a lowercase string
that has alphabetic characters only (both vowels and consonants)
and no spaces, return the length of the longest vowel substring.
Vowels are any of aeiou.

input: string
output: number
data str: strings & numbers only probably

extra rules:
- chain means consecutive vowels one after another
- only working with lowercase letters/vowels, case-insensitive
- no spaces will be included in input

Algorithm:
- declare empyt array 'chainLengths'
- iterate through string characters
    - declare var 'currentLength' set to 0
    - if current char is a vowel (aeiou)
        => increment 'currentLength' by 1
    - if current char is not a vowel AND
         currentLength is not already in 'chainLenghts'
        => append current value of 'currentLength' to 'chainLengths'
    - if current char is not a vowel
        => reassign 'currentLength' to 0

- find the maximum/ largest value in 'chainLengths'
    - can iterate through array or can use Math.max(...array)

- return that ^ maximum value

*/

function longestVowelChain(string) {
  let chainLengths = [];
  let currentChainLength = 0;
  string.split('').forEach(char => {
    if ('aeiou'.includes(char)) {
      currentChainLength += 1;
    } else if (!'aeiou'.includes(char) && !chainLengths.includes(currentChainLength)) {
      chainLengths.push(currentChainLength);
    }

    if (!'aeiou'.includes(char)) {
      currentChainLength = 0;
    }
  });

  return Math.max(...chainLengths);
}

console.log(longestVowelChain("codewarriors")); // 2
console.log(longestVowelChain("suoidea")); // 3
console.log(longestVowelChain("ultrarevolutionariees")); // 3
console.log(longestVowelChain("strengthlessnesses")); // 1
console.log(longestVowelChain("cuboideonavicuare")); // 2
console.log(longestVowelChain("chrononhotonthuooaos")); // 5
console.log(longestVowelChain("iiihoovaeaaaoougjyaw")); //8