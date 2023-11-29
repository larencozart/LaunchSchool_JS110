// Problem 2
// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

/*
P:
For arrays of 5 or more elements, return the sum of 5 consecutive numbers.
If there are multipe sums possible, return the sum with the lowest value.

E:
EXPLICIT:
- if the given array has a length less than 5, return `null`
IMPLICIT:
- return a number

D:
INPUT - array of numbers
OUTPUT - a number (minimum sum)
DATA STRUCTURES:
- arrays to store consecutive groups of 5
- arrays to store sums of groups

A:
HIGH LEVEL IDEA:
- iterate over the given array, and push groups of 5 
consecutive numbers to a new array. Find the sum of each group.
Find the lowest value of all the sums, and return that sum

STEP-BY-STEP:
// potential subprocess
- declare an empty array 'groupsOfFive'
- iterate through given array, start at idx 0
  - make a copy of the given array from current idx to idx + 5
  - if the copies length is less than 5, break out of loop
  - push that array to groupsOfFive array

// calculate sums
- declare new empty array 'sumsOfGroups'
- iterate over groupsOfFive, for each group
      - calculate sum of group **subprocess (or method)**
      - push sum to sumsOfGroups

// find lowest sum
- declare variable 'lowestSum' with value 'null'
- iterate over sumsOfGroups, declare a currentSum variable
  - if lowestSum is set to null
      => set lowestSum to value of currentSum
      => continue iteration

  - if currentSum < lowestSum
      => set lowestSum to currentSum
- return lowestSum
*/

function minimumSum(array) {
  if (array.length < 5) return null;

  let groupsOfFive = [];
  for (let idx = 0; idx < array.length; idx += 1) {
    let group = array.slice(idx, idx + 5);
    if (group.length < 5) break;
    groupsOfFive.push(group);
  }

  let sumsOfGroups = groupsOfFive.map(group => {
    return group.reduce((accum, el) => accum + el, 0);
  });

  let lowestSum = Math.min(...sumsOfGroups);
  return lowestSum;
}


// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".