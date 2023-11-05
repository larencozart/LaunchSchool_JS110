/* eslint-disable max-lines-per-function */
/*
Write a function that takes a string as an argument and returns
true if all parentheses in the string are properly balanced, false
otherwise. To be properly balanced, parentheses must occur in matching
'(' and ')' pairs.
*/

function stripOutNonParentheses (text) {
  const VALID_PARENTHESES = '()';
  return text
    .split('')
    .filter(char => VALID_PARENTHESES.includes(char))
    .join('');
}

function isBalanced (text) {
  const BEG_PARENTHESIS = '(';
  const END_PARENTHESIS = ')';

  let parenthesesPairs = stripOutNonParentheses(text);

  if (parenthesesPairs.length === 0) return true;

  let firstChar = parenthesesPairs[0];
  let lastChar = parenthesesPairs[parenthesesPairs.length - 1];
  let numOfBegParentheses = parenthesesPairs
    .split('')
    .filter(char => char === BEG_PARENTHESIS)
    .length;
  let numOfEndParentheses = parenthesesPairs
    .split('')
    .filter(char => char === END_PARENTHESIS)
    .length;

  return (firstChar === BEG_PARENTHESIS &&
          lastChar === END_PARENTHESIS  &&
          numOfBegParentheses === numOfEndParentheses);
}

console.log(isBalanced("What (is) this?")); // true
console.log(isBalanced("What is) this?")); // false
console.log(isBalanced("What (is this?")); // false
console.log(isBalanced("((What) (is this))?")); // true
console.log(isBalanced("((What)) (is this))?")); // false
console.log(isBalanced("Hey!")); // true
console.log(isBalanced(")Hey!(")); // false
console.log(isBalanced("What ((is))) up(")); // false