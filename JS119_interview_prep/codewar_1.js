// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective
// of this kata is to determine the number of pair of gloves you can
// constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number
// of pairs you can constitute, assuming that only gloves of the same color
// can form pairs.

// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)


/*
extra rules? : none
input: array
output: number, and description?
data str: object to count numbers, and array to filter out pairs?
a
A:
high level: create an object of each color and its count in the input array,
            filter out colors with even number of pairs, and print resulting
            pairs amount of pairs (not indv gloves)

step-by-step:
- create an empty object {} 'colorCounts'
- iterate through the given array
    - if current color is a property in colorCounts,
        => increment value by 1
    - if not:
        => assign current color as a property to colorCounts and set value as 1

- create a variable 'fullPairs' set to 0
- iterate through colorCounts object
    - if a property has an even number as its value (a pair)
        => divide the value by 2, and add this value to fullPairs

- return fullPairs
*/

function countPairs(arrayOfGloves) {
  let gloveColorCount = {};
  arrayOfGloves.forEach(glove => {
    gloveColorCount[glove] = (gloveColorCount[glove] || 0) + 1;
  });

  console.log(gloveColorCount);
}

console.log(countPairs());
