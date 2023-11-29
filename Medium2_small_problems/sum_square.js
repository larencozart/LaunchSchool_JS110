/*
Write a function that computes the difference between
the square of the sum of the first count positive integers
and the sum of the squares of the first count positive integers.
*/

function sumSquareDifference(num) {
  const allPositiveInts = [];
  for (let int = 1; int <= num; int += 1) {
    allPositiveInts.push(int);
  }

  const sumOfInts = allPositiveInts.reduce((accum, el) => accum + el, 0);
  const squareOfSum = sumOfInts * sumOfInts;

  const squares = allPositiveInts.map(int => int * int);
  const sumOfSquares = squares.reduce((accum, el) => accum + el);

  return squareOfSum - sumOfSquares;
}


sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150