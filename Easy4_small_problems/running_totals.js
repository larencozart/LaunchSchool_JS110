/*
Write a function that takes an array of
numbers and returns an array with the same
number of elements, but with each element's
value being the running total from the original array.
*/

function runningTotal (numArr) {
  let currentTotal = 0;
  let arrayOfTotals = [];

  numArr.forEach(num => {
    currentTotal += num;
    arrayOfTotals.push(currentTotal);
  });

  console.log(arrayOfTotals);
  return arrayOfTotals;
}


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []