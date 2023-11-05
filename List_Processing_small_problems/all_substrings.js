/*
Write a function that returns a list of all substrings of a string.
Order the returned list by where in the string the substring begins.
This means that all substrings that start at index position 0 should
come first, then all substrings that start at index position 1, and
so on. Since multiple substrings will occur at each position,
return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you
wrote in the previous exercise:
*/

function leadingSubstrings (string) {
  let substrings = string
    .split('')
    .map((_el, idx, arr) => arr.slice(0, idx + 1).join(''));

  return substrings;
}

function substrings (string) {
  let substrings = [];

  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

substrings('abcde');

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/