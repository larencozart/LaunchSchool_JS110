// problem 1
// How would you order the following array of number strings by
// descending numeric value (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];
let sortedArr = arr.sort((a, b) => Number(b) - Number(a));

console.log(sortedArr);
console.log(arr);

// problem 2
// How would you order the following array of objects based on the year
// of publication of each book, from the earliest to the latest?

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

let sortedBooks = books.sort((a, b) => a.published - b.published);
console.log(sortedBooks);

// problem 3
// For each of these collection objects, demonstrate how you would access the
// letter g.

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log('arr1: ' + arr1[2][1][3]);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log('arr2: ' + arr2[1].third[0]);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log('arr3: ' + arr3[2].third[0][0]);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log('obj1: ' + obj1.b[1]);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
console.log('obj2: ' + Object.keys(obj2.third)[0]);

// problem 4
// For each of these collection objects, demonstrate how you would
// change the value 3 to 4.

let arr11 = [1, [2, 3], 4];
arr11[1][1] = 4;
console.log(arr11[1][1]);

let arr22 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr22[2] = 4;
console.log(arr22[2]);

let obj11 = { first: [1, 2, [3]] };
obj11.first[2][0] = 4;
console.log(obj11.first[2][0]);

let obj22 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj22.a.a[2] = 4;
console.log(obj22.a.a[2]);

// problem 5
// Consider the following nested object:
// Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalMaleAge = Object
  .values(munsters)
  .reduce((accum, obj) => {
    if (obj.gender === 'male') return accum + obj.age;
    else return accum + 0;
  }, 0);

console.log(totalMaleAge);

// problem 6
// One of the most frequently used real-world string operations is that of
// "string substitution," where we take a hard-coded string and modify it
// with various parameters from our program.

// Given this previously seen family object, print the name, age, and
// gender of each family member:

// Each output line should follow this pattern:
// (Name) is a (age)-year-old (male or female).

let munsters1 = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters1).forEach(member => { // member => ['name', {obj details}]
  let name = member[0];
  let age = member[1].age;
  let gender = member[1].gender;
  console.log(`${name} is a ${age}-year-old ${gender}`);
});

// problem 7 - no coding

// problem 8
// Using the forEach method, write some code to output all vowels
// from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(arr => {
  arr.forEach(string => {
    string.split('').forEach(char => {
      if ('aeiou'.includes(char.toLowerCase())) {
        console.log(char);
      }
    });
  });
});

// problem 9
// Given the following data structure, return a new array with the same
// structure, but with the values in each subarray ordered --
// alphabetically or numerically as appropriate -- in ascending order.

let arr9 = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArr9 = arr9.map(subarr => {
  if (typeof subarr[0] === 'string') return subarr.sort();
  else if (typeof subarr[0] === 'number') return subarr.sort((a, b) => a - b);
  else return undefined;
});

console.log(sortedArr9);

// problem 10
// Perform the same transformation of sorting the subarrays we did in the
// previous exercise with one difference; sort the elements in descending order.

let arr10 = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArr10 = arr10.map(subarr => {
  if (typeof subarr[0] === 'string') return subarr.slice().sort().reverse();
  else if (typeof subarr[0] === 'number') return subarr.slice().sort((a, b) => a - b).reverse();
  else return undefined;
});

console.log(sortedArr10);

// problem 11
// Given the following data structure, use the map method to return a
// new array identical in structure to the original but, with each number
// incremented by 1. Do not modify the original data structure.

let array11 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArray11 = array11.map(obj => {
  let newObj = Object.assign({}, obj);
  Object.keys(newObj).forEach(key => {
    newObj[key] += 1;
  });
  return newObj;
});

console.log(newArray11);

// problem 12
// Given the following data structure, use a combination of methods, including
// filter, to return a new array identical in structure to the original, but
// containing only the numbers that are multiples of 3.

let arr12 = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr12 = arr12.map(subarr => subarr.filter(val => val % 3 === 0));

console.log(newArr12);

// problem 13
// Given the following data structure, sort the array so that the sub-arrays are
// ordered based on the sum of the odd numbers that they contain.
// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

let arr13 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let sortedArr13 = arr13.sort((a, b) => {
  let reducedA = a.reduce((accum, num) => {
    if (num % 2 === 1) return accum + num;
    else return accum + 0;
  }, 0);

  let reducedB = b.reduce((accum, num) => {
    if (num % 2 === 1) return accum + num;
    else return accum + 0;
  }, 0);

  return reducedA - reducedB;
});

console.log(sortedArr13);

// problem 14
// Given the following data structure write some code to return an
// array containing the colors of the fruits and the sizes of the
// vegetables. The sizes should be uppercase, and the colors should
// be capitalized.

// The return value should look like this:
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

let obj14 = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let colorAndSizeArr14 = Object.values(obj14)
  .reduce((accum, obj) => {
    let colors;
    let size;

    if (obj.type === 'fruit') {
      colors = obj.colors.map(color => {
        return color[0].toUpperCase() + color.slice(1);
      });
      accum.push(colors);
    }

    if (obj.type === 'vegetable') {
      size = obj.size.toUpperCase();
      accum.push(size);
    }

    return accum;
  }, []);

console.log(colorAndSizeArr14);

// problem 15
// Given the following data structure, write some code to return
// an array which contains only the objects where all the numbers are even.

let arr15 = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let evenObjs = arr15.filter(obj => {
  return Object.values(obj).flat().every(val => val % 2 === 0);
});

console.log(evenObjs);

// problem 16
// Given the following data structure, write some code that
// defines an object where the key is the first item in each
// subarray, and the value is the second.

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let arr16 = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];

let obj16 = Object.fromEntries(arr16);
console.log(obj16);


// problem 17
// A UUID is a type of identifier often used to uniquely identify items,
// even when some of those items were created on a different server or by
// a different application. That is, without any synchronization, two or
// more computer systems can create new items and label them with a UUID
// with no significant risk of stepping on each other's toes. It accomplishes
// this feat through massive randomization. The number of possible UUID
// values is approximately 3.4 X 10E38, which is a huge number. The chance
// of a conflict is vanishingly small with such a large number of possible
// values.

// Each UUID consists of 32 hexadecimal characters
// (the digits 0-9 and the letters a-f) represented as a string. The value
// is typically broken into 5 sections in an 8-4-4-4-12 pattern,
// e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

// Write a function that takes no arguments and returns a string that contains
// a UUID.

function createUUID() {
  const HEXADECIMALS = 'abcdef0123456789';
  const sections = [8, 4, 4, 4, 12];

  const uuid = sections.map(sectionNum => {
    let uniqueStr = '';

    for (let idx = 1; idx <= sectionNum; idx += 1) {
      const randomIndex = Math.floor(Math.random() * HEXADECIMALS.length);
      uniqueStr += HEXADECIMALS[randomIndex];
    }

    return uniqueStr;
  });

  return uuid.join('-');
}

console.log(createUUID());

// extra problems from JS119 study session
// 1
// Given a sentence return an array containing the words transformed
// to the maximum number consecutive consonants in it. Only transform
// words that are in ODD indexed positions.

/*
Seperate a string into words and transform the individual words into
an array of numbers representing each words highest count of consecutive
consonants
*/

// Hello World --> [2, 3]
 
//'Hello World'.split('').filter(element, index) => { return index % 2 !== 0})

// 2
// Given a paragraph, return true if any 3 consecutive sentences 
// start with the same word. 

// You are cute. Hello World. You are happy. You are sad. --> False
// You are cute. Hello World. You are happy. You are sad. You are smiling.
// Hello again. --> True


/*
Seperate a paragraph into an array of the sentences, iterate through
// the words, returning a
boolean if 3 consective sentences begin with the same word.

1. **Group Consecutive Sentences**: Group three consecutive sentences.
2. **Return True if Condition Met**: Return true if any such group
// of three consecutive sentences starts with the same word; otherwise,
// return false.
*/