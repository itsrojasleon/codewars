// Name
/*
  Summing a number's digits
*/
// Url
/*
  https://www.codewars.com/kata/summing-a-numbers-digits/train/javascript
*/
// Instructions
/*
  Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

  sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5
*/

function sumDigits(number) {
  return number
    .toString()
    .split('')
    .filter(Number)
    .reduce((acc, curr) => Number(acc) + Number(curr), 0);
}
sumDigits(10);
