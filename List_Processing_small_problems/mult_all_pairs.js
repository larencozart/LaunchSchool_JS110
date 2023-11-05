/*
Write a function that takes two array arguments, each containing
a list of numbers, and returns a new array containing the products
of all combinations of number pairs that exist between the two arrays.
The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.
*/

function multiplyAllPairs (array1, array2) {
  let pairs = [];

  array1.forEach(num1 => {
    array2.forEach(num2 => {
      pairs.push(num1 * num2);
    });
  });

  return pairs.sort((a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]