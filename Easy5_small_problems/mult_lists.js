/*
Write a function that takes two array arguments, each containing a
list of numbers, and returns a new array that contains the product of
each pair of numbers from the arguments that have the same index. You
may assume that the arguments contain the same number of elements.

A -
HIGH LEVEL - for each element in the first array, multiply the element
            with the element at the same index in the second array. Save
            products in new array

LOW LEVEL - 

*/

function multiplyList (array1, array2) {
  let productPairs = array1.map((el, idx) => el * array2[idx]);
  return productPairs;
}


multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]