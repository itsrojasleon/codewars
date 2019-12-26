// Name
/*
  Bit Counting
*/

// Url
/*
  https://www.codewars.com/kata/bit-counting/train/javascript
*/

// Instructions
/*
  Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

  Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function(n) {
  // return (n >>> 0)
  //   .toString(2)
  //   .split('')
  //   .filter(c => c === '1').length;

  return n
    .toString(2)
    .split('0')
    .join('').length;
};
countBits(7);
