// Name
/*
  Substring fun
*/

// Url
/*
  https://www.codewars.com/kata/substring-fun/train/javascript
*/

// Instructions
/*
  Complete the function that takes an array of words.

  You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

  For example:

  ["yoda", "best", "has"]  -->  "yes"
    ^        ^        ^
    n=0     n=1     n=2
*/

function nthChar(words) {
  let result = '';

  for (let i = 0; i < words.length; i++) {
    result += words[i][i];
  }
  return result;
}
nthChar(['yoda', 'best', 'has']);
