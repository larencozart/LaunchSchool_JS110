const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let realStaggeredCase = (string) => {
  let count = -1;
  return string
    .split('')
    .map(char => {
      if (ALPHABET.includes(char)) {
        count += 1;
        return count % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      }
      return char;
    })
    .join('');
};

console.log(realStaggeredCase('I Love Launch School!'));
console.log(realStaggeredCase('ALL CAPS'));
console.log(realStaggeredCase('ignore 77 the 444 numbers'));