/*
Write a function that takes a string argument and returns
a list of substrings of that string. Each substring should begin
with the first letter of the word, and the list should be ordered
from shortest to longest.
*/

function leadingSubstrings (string) {
  let substringArray = [];

  for (let length = 1; length <= string.length; length += 1) {
    let substring = string.slice(0, length);
    substringArray.push(substring);
  }

  return substringArray;
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function leadingSubstrings1 (string) {
  let substrings = string
    .split('')
    .map((_el, idx, arr) => arr.slice(0, idx + 1).join(''));

  return substrings;
}

leadingSubstrings1('abc');      // ["a", "ab", "abc"]
leadingSubstrings1('a');        // ["a"]
leadingSubstrings1('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]