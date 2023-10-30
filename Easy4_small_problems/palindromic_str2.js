/*
Write another function that returns true
if the string passed as an argument is a
palindrome, or false otherwise. This time,
however, your function should be case-insensitive,
and should ignore all non-alphanumeric characters.
If you wish, you may simplify things by calling
the isPalindrome function you wrote in the previous exercise.
*/

function isRealPalindrome1 (string) {
  let cleanString = string.replaceAll(/[\W]/gi, '').toLowerCase();
  return cleanString === cleanString.split('').reverse().join('');
}


function isRealPalindrome2 (string) {
  const alphanumerics = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let cleanString = '';
  string.toLowerCase().split('').forEach(char => {
    if (alphanumerics.includes(char)) {
      cleanString += char;
    }
  });

  return cleanString === cleanString.split('').reverse().join('');
}


isRealPalindrome1('madam');               // true
isRealPalindrome1('Madam');               // true (case does not matter)
isRealPalindrome1("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome1('356653');              // true
isRealPalindrome1('356a653');             // true
isRealPalindrome1('123ab321');            // false

isRealPalindrome2('madam');               // true
isRealPalindrome2('Madam');               // true (case does not matter)
isRealPalindrome2("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome2('356653');              // true
isRealPalindrome2('356a653');             // true
isRealPalindrome2('123ab321');            // false