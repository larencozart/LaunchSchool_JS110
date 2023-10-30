/*
Write a function that takes a string consisting
of zero or more space separated words and returns
an object that shows the number of words of different
sizes.

Words consist of any sequence of non-space characters.
*/

function wordSizes (string) {
  let words = string.split(' ');
  let wordSizes = {};

  words.forEach(word => {
    let size = word.length;
    if (size > 0) {
      wordSizes[size] = wordSizes[size] ? wordSizes[size] + 1 : 1;
    }
  });

  console.log(wordSizes);
  return wordSizes;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}