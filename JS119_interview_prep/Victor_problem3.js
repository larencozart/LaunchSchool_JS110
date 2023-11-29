/* eslint-disable max-len */
/* Write a function, negate, that converts all “yes” words to
 "no" and "no" words to "yes" in a sentence. The comparison for
 "yes" and "no" should be case insensitive."yes" and "no" should
 be negated if ending with ., ?, ,, or !.

P: Swap the words 'yes' and 'no' at each occurence in the string,
   keeping the original case of the word and punctuation at the end
   of the word

E:
- "Yes," => "No,", "yes." => "no."
- 'Yesterday' is not a part of 'yes', and 'not' is not a part of 'no'

D:
Input - string
Output - string, same amount of words, spaces, and puctuation as original
Data Str - arrays to hold words

A:
HIGH LEVEL
- iterate through all words in input string. if the word lowercased contains
  yes or no, check for upperCase and punctuation. Swap word to yes if no, and no
  if yes, and retain capitalization and punction. Return the string with
  transformed words.

STEPS:
// NEGATE FUNCTION
- declare an array that contains the string words ['yes', 'no'] 'wordsToNegate'
- turn input string into an array of words 'words'

- declare an empty array 'transformed words'
- iterate through 'words'
    - declare var 'isCapitalized' to true if currentWord[0]
      is upperCased, `false` otherwise

    - declare var 'punctuation' to ''
    - if last char is punctuation **subprocess
        => set punctuation to last char in currentWord
    - if punctuation present, remove punctuation from word for further comparison


    - if current word lowercased and without punctuation is in wordsToNegate array
        // TRANSFORM WORD SUBPROCESS?
        => if capitalized is true && current word lowercased === wordsToNegate[0]
              => append wordsToNegate[1] with first char capitalized + punctuation
                 to 'transformedWords' array
        => else if current word lowercased === wordsToNegate[0]
              => append wordsToNegate[1] + punctuation to transformedWords
        => else if capitalized is true && current word lowercased === wordsToNegate[1]
              => append wordsToNegate[0] with first char capitalized + punctuation
                 to 'transformedWords' array
        => else if current word lowercased === wordsToNegate[1]
              => append wordsToNegate[0] + punctuation to transformedWords

    - else
        => append current word as is to 'transformedWords' array

- return transformed words array as a string with elements joined by spaces.
*/

function findPunctuation(word) {
  const punctuationChars = [ '.', '?', ',', '!'];

  let punctuation = '';
  let lastChar = word[word.length - 1];
  if (punctuationChars.includes(lastChar)) {
    punctuation = lastChar;
  }

  return punctuation;
}

function transformToNegatedWord(word, wordsToNegate, capitalization, puctuation) {
  if (capitalization && word.toLowerCase() === wordsToNegate[0]) {
    return wordsToNegate[1][0].toUpperCase() +
           wordsToNegate[1].slice(1) + puctuation;
  } else if (capitalization && word.toLowerCase() === wordsToNegate[1]) {
    return wordsToNegate[0][0].toUpperCase() +
    wordsToNegate[0].slice(1) + puctuation;
  } else if (word.toLowerCase() ===  wordsToNegate[0]) {
    return wordsToNegate[1] + puctuation;
  } else {
    return wordsToNegate[0] + puctuation;
  }
}

function negate(string) {
  const wordsToNegate = ['yes', 'no'];
  return string.split(' ').map(word => {
    let isCapitalized = word[0].toUpperCase() === word[0];
    let punctuation = findPunctuation(word);
    if (punctuation) {
      word = word.slice(0, word.length - 1);
    }

    if (wordsToNegate.includes(word.toLowerCase())) {
      return transformToNegatedWord(word, wordsToNegate, isCapitalized, punctuation);
    } else {
      return word + punctuation;
    }
  });
}


console.log(negate("Yes, I said no but now I say yes."));
// "No, I said yes but now I say no."
console.log(negate("no way, yes way!")); // "yes way, no way!"
console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
console.log(negate("No, I do not know!")); // "Yes, I do not know!"


// VICTOR'S SOLUTION:
// check for the punctuation; keep if present
// check word if yes, no == downcase
// if matches yes, no, check the first lest for case
// if with punctuation, put punctuation back
// return "SWAPPED" word

function negate1(sentence) {
  return sentence.split(' ').map(word => {
    // Extract punctuation if present (., ?, !, or ,)
    const lastChar = word[word.length - 1];
    const punctuationMarks = ".?!,"; // List of punctuation marks
    const punctuation = punctuationMarks.includes(lastChar) ? lastChar : '';

    // Remove punctuation for comparison
    const wordWithoutPunctuation = punctuation ? word.slice(0, -1) : word;

    // Negate 'yes' and 'no', preserving case and punctuation
    let negatedWord;
    switch (wordWithoutPunctuation.toLowerCase()) {
      case 'yes':
        negatedWord = wordWithoutPunctuation[0] === 'Y' ? 'No' : 'no';
        break;
      case 'no':
        negatedWord = wordWithoutPunctuation[0] === 'N' ? 'Yes' : 'yes';
        break;
      default:
        negatedWord = wordWithoutPunctuation;
    }

    // Append the punctuation back to the negated word
    return negatedWord + punctuation;
  }).join(' ');
}

console.log(negate1("Yes, I said no but now I say yes."));
// "No, I said yes but now I say no."
console.log(negate1("no way, yes way!")); // "yes way, no way!"
console.log(negate1("Yesterday is not today?")); // "Yesterday is not today?"
console.log(negate1("No, I do not know!")); // "Yes, I do not know!"