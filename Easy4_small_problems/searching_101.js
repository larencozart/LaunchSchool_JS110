/*
Write a program that solicits six numbers
from the user and logs a message that describes
whether the sixth number appears among the first
five numbers.

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.
*/

const rls = require('readline-sync');

let numArray = [];
numArray.push(Number(rls.question('Enter the 1st number: ')));
numArray.push(Number(rls.question('Enter the 2nd number: ')));
numArray.push(Number(rls.question('Enter the 3rd number: ')));
numArray.push(Number(rls.question('Enter the 4th number: ')));
numArray.push(Number(rls.question('Enter the 5th number: ')));

let last = Number(rls.question('Enter the last number: '));

if (numArray.includes(last)) {
  console.log(`The number ${last} appears in ${numArray}.`);
} else {
  console.log(`The number ${last} does not appears in ${numArray}.`);
}


// Further exploration. Use some to find
// one element in an array that is greater than the last value
function isIncluded(arr, val) {
  return arr.some((element) => element > val);
}