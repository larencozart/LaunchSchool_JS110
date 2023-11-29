/*Detect Pangram
A pangram is a sentence that contains every single letter of the alphabet at least once.  
For example: the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.


P
- determine whether the given string has every letter of
the alphabet at least once

E
- case-insensitive, 'T' and 't' are the same
- letter can be more than once
- string input
- ignore anything than isnt a letter

D
- input: string
- output: boolean
- data structure: arrays, objects: frequency of each char
- Object literal - to store alphabet, key = character, value = count
- Array to split string into characters
- Use array to filter out non-letters
- set? what is that

A
HIGH-LEVEL: filter out non-letters, and transform each char into
a lowercase version of itself. Then determine, whether the filtered value
have each letter of the alphabet.

LOW-LEVEL:
- SET a variable 'alphabet' to the string 'abcdefghijklmnopqrstuvwxyz';
- SET a variable 'arrayOfChars' to the input string transformed to all lowercase,
and split into chars, with an empty string as a delimiter ('')
- SET a variable 'onlyAlphCharsArray' to filtered array with non-alphabet chars
not included
    - can use JS .includes() with alphabet or can use .test() with regex

- Set a variable as a object that is reduced to the frequency of each char
- if the values in the object all have a value of at least 1, return true;


Brute force approach

declare isPangram function that takes a string argument
  convert the string to all lower case
  iterate over every character in the alphabet
    look for the character in the string
    if the character is not in the string, return false
  if the loop finishes checking every character in the alphabet, then return true

*/

function isPangram(string) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let lowerCaseInputStr = string.toLowerCase();

  for (let idx = 0; idx < ALPHABET.length; idx += 1) {
    let currentChar = ALPHABET[idx];

    if (!lowerInputCaseStr.includes(currentChar)) return false;
  }

  return true;
}

/*

isPanagram(string):
  string = string.lower()
  alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for char of alphabet:
    if string.indexOf(char) is -1: return false
  return true
*/

/*
- declare a variable alphabet and assign it to the string 'abcd....'
- declare an object letterCount and assign it to an empty object
- iterate through alphabet and make each character a key in letterCount with an initial value of 0 

- declare a variable string and assign it to a lower case version of the input string
- declare a variable filteredString and assign it to the string filtered for alphabetic letters only (aka no whitespace or punctuation. consider using split/join chained together?)
- iterate through filteredString. for every character, find the key in letterCount and add 1 to its value
- iterate through letterCount's values. if any value is 0, return false 

*/

// function isPangram(sentence) {
//   const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
//   let charCount = ALPHABET.split('')
//     .reduce((accum, el) => {
//       accum[el] = 0;
//       return accum;
//     }, {});

//   sentence.toLowerCase()
//     .split('')
//     .filter(char => ALPHABET.includes(char))
//     .forEach(alphChar => {
//       charCount[alphChar] += 1;
//     });

//   return Object.values(charCount).every(val => val >= 1);
// }

// Test cases
console.log(isPangram('The quick brown fox jumps over the lazy dog.')); // == true);
console.log(isPangram('This is not a pangram.'));// == false);
