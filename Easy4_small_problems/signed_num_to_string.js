/*
In the previous exercise, you developed a function
that converts non-negative numbers to strings. In
this exercise, you're going to extend that function
by adding the ability to represent negative numbers as well.

Write a function that takes an integer and converts it
to a string representation.
*/

function integerToString (int) {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let stringDigits = [];
  let dividend = int;
  let divisor = 10;

  if (dividend === 0) {
    stringDigits.push(digits[dividend]);
  }

  while (dividend > 0) {
    let remainder = dividend % divisor;
    let stringDigit = digits[remainder];
    stringDigits.push(stringDigit);
    dividend = (dividend - remainder) / divisor;
  }

  return stringDigits.reverse().join('');
}

function signedIntegerToString(int) {
  let absInt = Math.abs(int);
  let stringOfInt = integerToString(absInt);

  if (int < 0) {
    return `-${stringOfInt}`;
  } else if (int > 0) {
    return `+${stringOfInt}`;
  } else {
    return stringOfInt;
  }
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));