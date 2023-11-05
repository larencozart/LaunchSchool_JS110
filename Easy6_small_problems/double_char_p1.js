/*
Write a function that takes a string, doubles every character in
the string, and returns the result as a new string.

A - HIGH LEVEL: iterate over every character and add that char twice
                to a new string.
    LOW LEVEL:
    - SET var 'doubledChars' to an empty string ''

    - LOOP through length of input string for each index
    (start at idx 0, increment idx by 1 each iteration)
      - SET var 'currentChar' to input string element at current index
      - doubledChars += current char + current char (repeated twice)

    - RETURN doubledChars
*/

function repeater (string) {
  let doubledChars = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    let currentChar = string[idx];
    doubledChars += currentChar.repeat(2);
  }

  return doubledChars;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""