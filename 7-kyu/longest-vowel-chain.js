// Name
/*
  Longest vowel chain
*/

// Url
/*
  https://www.codewars.com/kata/longest-vowel-chain/train/javascript
*/

// Instructions
/*  
  The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring.
*/

function solve(s) {
  // return Math.max(...s.replace(/[^aeiuo]/gi,' ').split(' ').map(v=>v=v.length));

  return s.split(/[^aeiou]/).reduce((a, b) => Math.max(a, b.length), 0);
}
solve('codewarriors');
