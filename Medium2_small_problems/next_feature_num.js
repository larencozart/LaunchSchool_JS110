/*
A featured number (something unique to this exercise) is an odd
number that is a multiple of 7, with all of its digits occurring
exactly once each. For example, 49 is a featured number, but 98
is not (it is not odd), 97 is not (it is not a multiple of 7),
and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns
the next featured number greater than the integer. Issue an error
message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.
*/

function hasRepeatedDigit(num) {
  const digits = String(num).split('');

  let digitCount = {};
  digits.forEach(digit => {
    if (Object.hasOwn(digitCount, digit)) {
      digitCount[digit] += 1;
    } else {
      digitCount[digit] = 1;
    }
  });

  return Object.values(digitCount).some(count => count > 1);
}

function isAFeatureNumber(num) {
  return num % 2 === 1 &&
         num % 7 === 0 &&
         !hasRepeatedDigit(num); // no digits repeat;
}

function featured(num) {
  const MAX_FEATURE_NUM = 9876543201;

  if (num >= MAX_FEATURE_NUM) {
    return "There is no possible number that fulfills those requirements.";
  }

  let currentNum = num + 1;
  while (true) {
    if (isAFeatureNumber(currentNum)) break;
    currentNum += 1;
  }

  return currentNum;
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."