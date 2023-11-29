/* eslint-disable max-len */
// Problem 1

// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

/*
P: With a given array of numbers, for each of those numbers,
count how many smaller numbers there are in the same array, and
return a new array of those counts.

E:
EXPLICIT RULES
- Do not consider/use duplicated numbers when counting.
IMPLICIT RULES
- return an array of the counts, corresponding to
the original numbers
- If the array contains only 1 number, return 0
- If the array contains only duplicated numbers, return 0
  for each number

D:
INPUT - array of numbers (integers)
OUTPUT - array of counts (integers)
DATA STRUCTURES :
- array to store counts
- object to store frequency of num in original array

A:
HIGH-LEVEL STRATEGY:
- iterate through the array of numbers, compare each number
  to each other number in the array (or the entire array including itself).
  if the compared number has not already appeared, and the compared number
  is less than the current number, add it to a count. Return the counts
  in an array

STEP-BY-STEP STRATEGY:

// COUNT NUMBER OF SMALLER NUMBERS IN ARRAY

- declare an empty array 'smallerNumCounts'

- iterate through array of numbers
    - for each number 'currentNum'
        - declare a varibalbe 'numFrequencies' as an empty object literal
        - declare a variable 'count' with the value 0

        - iterate through the original array of numbers
            - declare a variable 'compareNum'
              - if 'currentNum' is a property in 'numFrequencies'
                  => increment its value by 1
              - else
                   => assign 'currentNum' as a property to
                   'numFrequencies' with a value of 1

            - if currentNum > compareNum && numFrequencies['compareNum'] < 2;
                => increment count by 1

        - append the 'count' for the 'currentNum' to the array 'smallerNumCounts'

- return the array 'smallerNumCounts'
*/

function smallerNumbersThanCurrent(arrayOfNums) {
  return arrayOfNums.map(currentNum => {
    let numFrequencies = {};
    let count = 0;

    arrayOfNums.forEach(compareNum => {
      numFrequencies[compareNum] = (numFrequencies[compareNum] || 0) + 1;

      if (currentNum > compareNum && numFrequencies[compareNum] < 2) {
        count += 1;
      }
    });

    return count;
  });
}


// Examples:

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]


/* things to improve:
- avoid direct method returns values at first bc it its harder to
  log values along the way
- instead save method returns into a variable when possible,
  can be refactored later
- dont immediately jump into helper functions, work on algorithm
  and make note to potentially abstract to helper function, or write a small
  high level description with not to abstract problem away

*/