/* eslint-disable no-return-assign */
// Problem 3
// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

/*
P: with a sentence as an input, return the same sentence
with every 4th character in every other word/ every second word
uppercased.

E:
EXPLICIT:
IMPLICIT:
- if the second word does not have 4 charactes, return the
  same word
- for longer words the 4th, 8th, 12th, etc character should
  also be uppercased
- a word is a set of chars delimited by a single space

D:
INPUT: string
OUTPUT: string
DATA STR: array to hold words

A:
HIGH-LEVEL:
- separate the given string into an array of words. For each word,
  determine if it is second (or after another word). For each second
  word, determine the 4th characters. Capitalize these characters. Return
  all the words from the original string with the modifications

STEP-BY-STEP:

- declare a variable 'words' and set it to the value of the input
  string separated into an array of words (separate on ' ' empty spaces)

- declare a new emty array 'weirdWords'
- iterate over the array of words, for every word element
    - if the index of the current word is odd
        => declare variable 'chars' to the characters of the current word
          split into an array of characters (delimited by an empty string '')
        => declare an empty array 'weirdChars'
        => iterate over chars, for every char
              // determine what is the 4th char ****
              // [0, 1, 2, **3, 4, 5, 6, **7, 8, 9 , 10, **11]
              - if index + 1 % 4 is 0
                    => append the current char transformed to
                       uppercase to 'weirdChars'
              - else
                    => append the current char to the array 'weirdChars'
        => transform weirdChars array to a string (no separators between chars)
        => append the transformed string to the array 'weirdWords'

    - else (if index is even)
        => append the current word unchanged to 'weirdWords'

- transform 'weirdWords' into a string sentence, with a ' ' space separator
  between each word.
*/

function toWeirdCase(string) {
  return string.split(' ')
    .map((word, idx) => {
      if (idx % 2 === 1) {
        return word.split('')
          .map((char, idx) => {
            if (((idx + 1) % 4) === 0) {
              return char.toUpperCase();
            } else {
              return char;
            }
          })
          .join('');
      } else {
        return word;
      }
    })
    .join(' ');
}


// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".