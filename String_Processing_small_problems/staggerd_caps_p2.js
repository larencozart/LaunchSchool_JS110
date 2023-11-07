/*
Modify the function from the previous exercise so it ignores
non-alphabetic characters when determining whether it should
uppercase or lowercase each letter. The non-alphabetic characters
should still be included in the return value; they just don't count
when toggling the desired case.
*/

function staggeredCase(string) {
  const VOWELS = 'abcdefghijklmnopqrstuvwxyz';
  let state = 'lower';

  return string
    .split('')
    .map(char => {
      let isLetter = VOWELS.includes(char.toLowerCase());
      if ((isLetter) && (state === 'lower')) {
        state = 'upper';
        return char.toUpperCase();
      } else if ((isLetter) && (state === 'upper')) {
        state = 'lower';
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);