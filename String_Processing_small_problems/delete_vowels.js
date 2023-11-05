/*
Write a function that takes an array of strings and returns an array
of the same string values, but with all vowels (a, e, i, o, u) removed.
*/

function removeVowels (arr) {
  const VOWELS = /[aeiouAEIOU]/gi;
  return arr.map(string => string.replaceAll(VOWELS, ''));
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]