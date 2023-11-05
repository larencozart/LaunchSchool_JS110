/*
Write a function that takes a string, doubles every consonant
character in the string, and returns the result as a new string.
The function should not double vowels ('a','e','i','o','u'), digits,
punctuation, or whitespace.

A - HIGH LEVEL: iterate through chars in string. If char is a consonant,
                save it in a new string twice, else save it once in the new
                string. Return new string.
    LOW LEVEL:
    - SET constant 'consonants' as string or list of all possible constants
    - SET var 'doubledConsonants' to an empty string ''

    - LOOP (through each char in string,
      by idx 0 to last idx, increment each time by 1)
        - SET var 'currentChar' as element at current index of string
        - IF currentChar (lowerCased/ case-insensitive) is in consonants
          - doubledConsonants += currentChar + currentChar (repeated twice)
        - ELSE
          - doubledConsonants += currentChar

    - RETURN doubledConsonants
*/

function doubleConsonants (string) {
  const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
  let doubledConsonants = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    let currentChar = string[idx];

    if (CONSONANTS.includes(currentChar.toLowerCase())) {
      doubledConsonants += currentChar.repeat(2);
    } else {
      doubledConsonants += currentChar;
    }
  }

  return doubledConsonants;
}


doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""