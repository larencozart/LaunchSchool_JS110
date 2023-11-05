/*
Write a function that takes an integer argument and returns
an array containing all integers between 1 and the argument
(inclusive), in ascending order.

You may assume that the argument will always be a positive integer.
*/

function sequence (int) {
  let intSequence = [];

  for (let count = 1; count <= int; count += 1) {
    intSequence.push(count);
  }

  return intSequence;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]