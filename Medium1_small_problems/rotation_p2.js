/*
Write a function that rotates the last count digits of a number.
To perform the rotation, move the first of the digits that you want
to rotate to the end and shift the remaining digits to the left.
*/

function rotateRightmostDigits(number, digits) {
  let arrayOfDigits = String(number).split('');

  const rightIndex = -(digits);
  const removedDigit = arrayOfDigits.splice(rightIndex, 1);
  const rotatedArrayOfDigits = arrayOfDigits.concat(removedDigit);

  return Number(rotatedArrayOfDigits.join(''));
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917