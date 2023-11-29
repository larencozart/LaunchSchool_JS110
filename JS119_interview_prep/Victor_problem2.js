//  Given an array of numbers, return true if any 5 consecutive
//  numbers are greater than 3. If there are less than 5 numbers
// in the array return, true if all are greater than 3.


console.log(checkConsecutiveNumbers([4, 5, 6, 7, 8])); // true
console.log(checkConsecutiveNumbers([2, 4, 5, 6, 7, 8])); // true
console.log(checkConsecutiveNumbers([1, 2, 3, 4, 5])); // false
console.log(checkConsecutiveNumbers([4, 4]));
// true (less than 5 numbers, all greater than 3)
console.log(checkConsecutiveNumbers([2, 2]));
// false (less than 5 numbers, not all greater than 3)