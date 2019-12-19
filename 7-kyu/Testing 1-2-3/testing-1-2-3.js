// Name
/*
  Testing 1-2-3
*/

// Url
/*
  https://www.codewars.com/kata/testing-1-2-3/train/javascript
*/

// Instructions
/*
  Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

  Write a function which takes a list of strings and returns each line prepended by the correct number.

  The numbering starts at 1. The format is n: string. Notice the colon and space in between.

  Examples:

  number([]) // => []
  number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
*/

const number = function(array) {
  return array.map((c, i) => `${i + 1}: ${c}`);
};
number(['a', 'b', 'c']);
