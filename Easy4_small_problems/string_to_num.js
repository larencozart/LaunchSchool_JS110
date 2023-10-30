/*
The parseInt() method converts a string of numeric
characters (including an optional plus or minus sign)
to an integer. The method takes 2 arguments where the
first argument is the string we want to convert and the
second argument should always be 10 for our purposes.
parseInt() and the Number() method behave similarly.
In this exercise, you will create a function that does
the same thing.

Write a function that takes a string of digits and
returns the appropriate number as an integer. You may
not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor
should you worry about invalid characters; assume all
characters will be numeric.

You may not use any of the standard conversion methods
available in JavaScript, such as String() and Number().
Your function should do this the old-fashioned way and
calculate the result by analyzing the characters in the string.
*/

function stringToInteger(string) {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let numArr = string.split('').map(char => digits.indexOf(char));

  // note: could not think of the math on my own
  let value = 0;
  numArr.forEach(num => (value = (10 * value) + num));

  return value;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

// Hamdi's solution. Genius. Use an array instead of a string though
// to match element string with numeric index
// Helped me refactor my code
function stringToInteger2(string) {
  const values = "0123456789";
  let result = 0;

  for (let character of string) {
    result = (result * 10) + values.indexOf(character);
  }
  return result;
}

console.log(stringToInteger2("4321") === 4321); // logs true
console.log(stringToInteger2("570") === 570); // logs true