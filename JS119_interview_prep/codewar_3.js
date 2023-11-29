/*
Return substring instance count

Complete the solution so that it returns the number of times
the search_text is found within the full_text. Overlap is not
permitted : "aaa" contains 1 instance of "aa", not 2.

Usage example:

full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
    ---> should return 2 since "bb" shows up twice


full_text = "aaabbbcccc", search_text = "bbb"
    ---> should return 1


input: 2 strings (full text & search text)
output: number
data str: string/numbers only probably

extra rules:
- overlap is not permitted
- 'aaa' only has 1 instance of 'aa'
- a substring is at least 2 chars long

Algorithm - can use regex most easily
          - otherwise, split fullText into substrings
          - count occurrences of 'searchText' in substrings

Substring Steps:
- declare an empty array 'substrings'
- iterate through full text string
    - at each index from 0 (start) to end of string
        - iterate over string from current index to end of full text
            - declare 'end idx' as current index + 2
            - make substring from current index to end &
              append to 'substrings' array

- declare var 'matches' with value 0
- iterate over 'substrings' array
    - if current substring element is the same as the search text
        => increment 'matches' by 1

- return matches

*/

function returnMatches(fullText, searchText) {
  const regex = new RegExp (searchText, 'g');
  return fullText.match(regex).length;
}


console.log(returnMatches("aa_bb_cc_dd_bb_e", "bb")); // 2
console.log(returnMatches("aaabbbcccc", "bbb")); // 1
console.log(returnMatches("aaa", "aa")); // 1


function returnMatches1(fullText, searchText) {
  let substrings = [];
  for (let start = 0; start < fullText.length; start += 1) {
    for (let end = start + 2; end < fullText.length; end += 1) {
      substrings.push(fullText.slice(start, end));
    }
  }

  return substrings.filter(substr => substr === searchText).length;
}

console.log(returnMatches1("aa_bb_cc_dd_bb_e", "bb")); // 2
console.log(returnMatches1("aaabbbcccc", "bbb")); // 1
console.log(returnMatches1("aaa", "aa")); // 1