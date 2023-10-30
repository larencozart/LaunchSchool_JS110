/*
Modify the wordSizes function from the
previous exercise to exclude non-letters
when determining word size. For instance,
the word size of "it's" is 3, not 4.
*/

function wordSizes (string) {
  let words = string.split(' ');
  let wordSizes = {};

  words.forEach(word => {
    let cleanWord = word.replaceAll(/[\W_+]/gi, '');
    let size = cleanWord.length;
    if (size > 0) {
      wordSizes[size] = wordSizes[size] ? wordSizes[size] + 1 : 1;
    }
  });

  console.log(wordSizes);
  return wordSizes;
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}