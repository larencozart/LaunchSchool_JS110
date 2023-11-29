// Write a function that masks proper nouns and numbers in a sentence.
//  Use * to mask proper nouns and use # to mask numbers.
// You may assume that a sentence will not begin with a proper noun
// and will not end with a number or proper noun. Numbers can only be integers.

/*
input- string
output - string
data str - arrays possibly

A:
High-Level:
- split input string into words. if word is a 'proper noun' mask it with a '*',
  and if word is a number, mask with '#'

Step-by-step:
- separate words from input string, and put all words as
  elements in a new array 'words'
    - words are chars separated by a ' ' empty single space

- declare new empty array 'maskedWords'
- iterate over the array 'words'
    - for each word
    - if word is a proper noun (has first char uppercased)
        => replace all chars with *
    - else if word is a number (string UTF-16 unit between 0 and 9)
        => replace all chars with #
    - else
        => append word to maskedWords

- transform maskedWords into a string with each element
  separated by a single space ' ', maskedString as variable name potentially

- return maskedString

*/

function maskSentence(string) {
  return string.split(' ')
    .map((word, idx) => {
      if (idx === 0) {
        return word;
      } else if (word >= '0' && word <= '9') { // if (parseInt(word).toString === word)
        return  word.replaceAll(/[0-9]/g, '#');
      } else if (word[0] === word[0].toUpperCase()) {
        return word.replaceAll(/[a-zA-Z]/g, '*');
      } else {
        return word;
      }
    })
    .join(' ');
}

console.log(maskSentence("They bought 5 apples from John yesterday.")); // They bought # apples from **** yesterday.
console.log(maskSentence("Alice and Bob went to Paris in 2021 to have a vacation.")); // Alice and *** went to ***** in #### to have a vacation.