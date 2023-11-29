// Problem 5
// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

/*
P: Find the character in the string, case-insensitive, that
appears the least often. If there are some chars with the same least
frequency, find the char that occurs first in the string

E: extra rules from test cases
- include punctuation/ spaces as a valid character
- return the lowercased version of the char - no
  need to return the original case of the letter

D:
INPUT - string
OUTPUT - string of one character
DATA STR - arrays to hold characters, object to count char frequency

A:
HIGH-LEVEL
- separate string into array of characters, and save frequency
  of each char in an object. Find the char(s) with the lowest
  frequency, and return the one the comes first in the original
  string

STEP-BY-STEP:
// create an array of characters
- lowercase input string
- separate input string into an array of chars (separator '' is empty str)

// create a count of frequency of each char
- declare empty object {} 'charCounts'
- iterate over array of chars
    - if current char is NOT a property in 'charCounts'
        => assign property 'current char' to value 0 in 'charCounts'
    - if current char is a property in 'charCounts'
        => increment property value by 1

//find the lowest value(s) in 'charCounts'
- create an array of object's values
- iterate over array to find lowest value, or use Math.min() method
- create an array of all the properties (chars) in the 'charCounts'
  obj that have the lowest value as their value ('lowestFreqChars')

//  find the char that comes first in the original array of chars
- declare variable 'firstLowestFreqChar',
- iterate through original array of chars, for each char
    - if current char is in 'lowestFreqChars'
        => set firstLowestFreqChar to current char

- return lowestFreqChar
*/

function leastCommonChar(string) {
  const arrayOfChars = string.toLowerCase().split('');

  let charCounts = {};
  arrayOfChars.forEach(char => {
    charCounts[char] = (charCounts[char] || 0) + 1;
  });

  const lowestFreq = Math.min(...Object.values(charCounts));
  const lowestFreqChars = Object.keys(charCounts).filter(char => {
    return charCounts[char] === lowestFreq;
  });

  return arrayOfChars.find(char => lowestFreqChars.includes(char));
}

// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".