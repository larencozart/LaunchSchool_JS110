/*
Write a function that takes a string and returns an object
containing the following three properties:

1. the percentage of characters in the string that are lowercase letters
2. the percentage of characters that are uppercase letters
3. the percentage of characters that are neither

You may assume that the string will always contain at least one character.
*/

function letterPercentages(str) {
  const divisor = str.length;
  let percentages = { lowercase : 0, uppercase : 0, neither : 0 };

  str.split('').forEach(char => {
    if (char >= 'a' && char <= 'z') {
      percentages.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      percentages.uppercase += 1;
    } else {
      percentages.neither += 1;
    }
  });

  Object.keys(percentages).forEach(key => {
    percentages[key] = ((percentages[key] / divisor) * 100).toFixed(2);
  });

  return percentages;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }