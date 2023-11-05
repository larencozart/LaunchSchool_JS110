/*
Write a function that takes a string and returns an object containing
three properties: one representing the number of characters in the
string that are lowercase letters, one representing the number of characters
that are uppercase letters, and one representing the number of characters
that are neither.
*/

function letterCaseCount (string) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let count = { lowercase : 0, uppercase : 0, neither : 0};

  string.split('').forEach(char => {
    if (!letters.includes(char.toLowerCase())) {
      count.neither += 1;
    } else if (char === char.toLowerCase()) {
      count.lowercase += 1;
    } else if (char === char.toUpperCase()) {
      count.uppercase += 1;
    }
  });

  return count;
}

// LS solution with regex -- use .match() method
function letterCaseCount1(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
