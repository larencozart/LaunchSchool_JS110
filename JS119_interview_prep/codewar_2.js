/*
Count characters in your string

The main idea is to count all the occurring characters in a
string. If you have a string like aba, then the result should
be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty
object literal, {}.

input: string
output: object
data str: object

extra rules:
- empty string outputs empyt object

Algorithm - iterate through the string's chars and add each new char
            as a property of a declared counts object with a value
            of 1. If char is already a property, increment the value
            of the property by 1 each time the same char is passed by again.


- declare an empty object 'counts'
- iterate through input string, over each char
    - if current char is not a property in obj 'counts
          => add it as a property to 'counts' with a value of 1
    - if current char is a property in 'counts'
          => increment its value by 1
- return counts object
*/

function countChars(string) {
  let counts = {};
  string.split('').forEach(char => {
    counts[char] = (counts[char] || 0) + 1;
  });
  return counts;
}

console.log(countChars('aba')); // {a: 2, b: 1}
console.log(countChars('')); // {}
console.log(countChars('Hello World!'));


function countChars2(string) {
  return string.split('').reduce((countObj, char) => {
    countObj[char] = (countObj[char] || 0) + 1;
    return countObj;
  }, {});
}

console.log(countChars2('aba')); // {a: 2, b: 1}
console.log(countChars2('')); // {}
console.log(countChars2('Hello World!'));