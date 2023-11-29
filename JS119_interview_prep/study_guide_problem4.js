// Problem 4
// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

/*
P: given an array of ints, return a new array of the two nums
that are closest in value from the original array

E: extra rules
- numbers are returned in the same order left to right as they were
in the original array

D:
INPUT - array of nums
OUTPUT - array of 2 nums
DATA STR - arrays, array methods

A:
HIGH STRAT: create an array of every grouping of two nums from
            original array. for each of those groups, find the abs
            value of subtracting the nums from each other, and save
            that into a new array with the same indexes as original.
            find the lowest abs difference. return the array pair that has
            the same indx as the lowest abs diff

STEPS:
- declare empty array 'numPairs'
- iterate through input array
    - declare current num
        - iterat over the original array,
          starting at the index that comes after the
          index of the current num
              - declare a compare num
              - append a new array with the current num
                and compare num as elements to the 'numPairs' array

- declare an empty array 'absDiffs'
- iterate over 'numPairs', for each pair
    - calculate the absolute difference of each pair
    - append difference to 'absDiffs' array

- find the index lowest value within the 'absDiffs' array,
called 'lowestDiffIdx'
    - can use for loop with a lowestDifIndex declared beforehand
    - or use JS method Math.min(...array) and indexOf method

return the value of numPairs[at lowestDiffIdx]


*/

function closestNumbers(arrayOfNums) {
  let numPairs = [];
  arrayOfNums.forEach((num, idx) => {
    let otherNums = arrayOfNums.slice(idx + 1);

    otherNums.forEach(otherNum => {
      numPairs.push([num, otherNum]);
    });
  });

  let absDiffs = numPairs.map(pair => Math.abs(pair[0] - pair[1]));
  let lowestDiffIdx = absDiffs.indexOf(Math.min(...absDiffs));

  return numPairs[lowestDiffIdx];
}


// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]