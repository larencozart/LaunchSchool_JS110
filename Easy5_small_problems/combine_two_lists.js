/*
Write a function that combines two arrays passed as
arguments, and returns a new array that contains all
elements from both array arguments, with each element
taken in alternation.

You may assume that both input arrays are non-empty,
and that they have the same number of elements.
*/

function interleave (array1, array2) {
  let combinedArray = [];

  for (let idx = 0; idx < array1.length; idx += 1) {
    combinedArray.push(array1[idx], array2[idx]);
  }

  console.log(combinedArray);
  return combinedArray;
}

function interleave2 (array1, array2) {
  let combinedArray = [];

  array1.forEach((_elem, idx) => {
    combinedArray.push(array1[idx], array2[idx]);
  });

  console.log(combinedArray);
  return combinedArray;
}

function interleave3 (array1, array2) {
  // use map
}

function interleave4 (array1, array2) {
  // use reduce
}

interleave2([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]