/* eslint-disable no-undef */
/*
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...)
such that the first two numbers are 1 by definition, and each subsequent number
is the sum of the two previous numbers. Fibonacci numbers often appear in
mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results
grow at an incredibly rapid rate. For example, the 100th Fibonacci number
is 354,224,848,179,261,915,075—that's enormous, especially considering
that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci
number that has the number of digits specified by the argument. (The first
Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal
to 2.

P - given an amount of digits, return the index position of the first fibonacci
    number that has the given number of digits
E -
D - input: number of digits (bigint)
  - output: index position of number with
            specified amount of digits (1-based index) (bigInt)
  - data structure: array to hold each fibonacci number?

A - run the fibonacci formula, until specified amount of digits is found.

  - SET a var 'fibonacciNums' to val [1, 1] // first two fibonaci values
  - DECLARE a var 'currentNum'


*/

function findFibonacciIndexByLength(digits) {
  let fibonacciNums = [1n, 1n];
  let currentNum;

  while (true) {
    currentNum = fibonacciNums
      .slice(-2)
      .reduce((accum, el) => accum + el, 0n);

    fibonacciNums.push(currentNum);

    let currentLength = BigInt(String(currentNum).length);
    if (currentLength === digits) break;
  }

  console.log(BigInt(fibonacciNums.indexOf(currentNum)) + 1n);
  return BigInt(fibonacciNums.indexOf(currentNum)) + 1n;
}

findFibonacciIndexByLength(2n);  // === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n);  // === 12n;// 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n); // === 45n;
findFibonacciIndexByLength(16n); // === 74n;
findFibonacciIndexByLength(100n); // === 476n;
findFibonacciIndexByLength(1000n); // === 4782n;
findFibonacciIndexByLength(10000n); // === 47847n;

// The last example may take a minute or so to run.