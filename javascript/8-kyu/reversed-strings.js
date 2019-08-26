// Name
/*
  Reversed Strings
*/

// Url
/*
  https://www.codewars.com/kata/reversed-strings/train/javascript
*/

// Instructions
/*
  Complete the solution so that it reverses the string value passed into it.
*/

// Example
/*
  solution('world'); // returns 'dlrow'
*/

function solution(str) {
  return str
    .split('')
    .reverse()
    .join('');
}
solution('world');
