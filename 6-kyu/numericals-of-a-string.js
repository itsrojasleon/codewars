// Name
/*
  Numericals of a String
*/

// Url
/*
  https://www.codewars.com/kata/numericals-of-a-string/train/javascript
*/

// Instructions
/*
  You are given an input string.

  For each symbol in the string if it's the first character occurence, 
  replace it with a '1', else replace it with the amount of times you've already 
  seen it...

  But will your code be performant enough?

  Examples:
  input   =  "Hello, World!"
  result  =  "1112111121311"

  input   =  "aaaaaaaaaaaa"
  result  =  "123456789101112"
  There might be some non-ascii characters in the string.
*/

function numericals(s) {
  let charMap = {};
  let result = '';

  for (let i = 0; i < s.length; i++) {
    charMap[s[i]] = charMap[s[i]] + 1 || 1;
    result += charMap[s[i]];
  }
  return result;
}
numericals('Hello, World!');
