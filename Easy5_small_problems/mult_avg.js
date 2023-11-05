/*
Write a function that takes an array
of integers as input, multiplies all
of the integers together, divides the
result by the number of entries in the
array, and returns the result as a string
with the value rounded to three decimal
places.

P - determin the average/mean of a set of numbers, and return
    that average as a string rounded to 3 decimal places
E -
D -
  - input: array of integers
  - output: string of float rounded to 3 decimals
  - data structure: none, except for input
A - 
HIGH LEVEL - Loop through array, multiplying each number to the sum of
             the multiplied numbers before it, then divide by the total
             elements present. Convert to a float with 3 decimals, then
             convert to a string.

LOW LEVEL
- SET varaible 'product' = 1
- LOOP through array for each element of the array
  (idx start at 0, ends at array's length -1)
    - product = product * element at current idx
    - increment loop
- SET variable 'average' = (product / array's length)
                            rounded to decimal with three places
- RETURN average coverted into a string
*/

function multiplicativeAverage (numbers) {
  let average = (numbers.reduce((accum, el) => accum * el, 1)) / numbers.length
  return average.toFixed(3);
}

function multiplicativeAverage1 (numbers) {
  let product = 1;

  for (let idx = 0; idx < numbers.length; idx += 1) {
    product *= numbers[idx];
  }

  console.log((product / numbers.length).toFixed(3));
  return (product / numbers.length).toFixed(3);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

console.log(multiplicativeAverage([3, 5]));