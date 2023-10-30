/*
In the previous two exercises, you developed
 functions that convert simple numeric strings
  to signed integers. In this exercise and the next
  , you're going to reverse those functions.

Write a function that converts a non-negative integer
 value (e.g., 0, 1, 2, 3, and so on) to the string
  representation of that integer.

You may not use any of the standard conversion
 functions available in JavaScript, such as String(),
  Number.prototype.toString, or an expression such as
   '' + number. Your function should do this the
    old-fashioned way and construct the string by
     analyzing and manipulating the number.

P = Transform an integer input into a string representation
E = IMPLICIT: 0s turn to '0's
    EXPLICIT: do not use fancy built-in functions
D = Input: integer (number)
    Output: string
    Data Structure: arrays
A = HIGH LEVEL:
    Separate each digit from the given integer into an array of
    separate, ordered digits. Map these digits to their string
    equivalents, and return the string digits in sequential order,
    as one string.
    LOW LEVEL:

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


integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"
console.log(integerToString(-123));