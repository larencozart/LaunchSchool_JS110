/*
Write a function that returns true if its
integer argument is palindromic, or false
otherwise. A palindromic number reads the
same forwards and backwards.
*/

function isPalindromicNumber (num) {
  let numberString = String(num);
  return numberString === numberString.split('').reverse().join('');
}

// can use the function from palindromic_str1.js (isPalindrome())

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true