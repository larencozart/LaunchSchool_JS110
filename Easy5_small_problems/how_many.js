/*
Write a function that counts the number of occurrences
of each element in a given array. Once counted, log each
element alongside the number of occurrences. Consider the words
case sensitive e.g. ("suv" !== "SUV").
*/

function countOccurrences (array) {
  let count = {};

  array.forEach(elem => {
    if (count.hasOwnProperty(elem)) {
      count[elem] += 1;
    } else {
      count[elem] = 1;
    }
  });

  Object.keys(count).forEach(prop => {
    console.log(`${prop} : ${count[prop]}`);
  });
}



let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1