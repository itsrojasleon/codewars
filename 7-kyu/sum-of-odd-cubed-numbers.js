// Name
/*
  Sum of Odd Cubed Numbers
*/

// Url
/*
  https://www.codewars.com/kata/sum-of-odd-cubed-numbers/train/javascript
*/

// Instructions
/*
  Find the sum of the odd numbers within an array, after cubing the initial integers. 
  The function should return undefined/None/nil/NULL if any of 
  the values aren't numbers.
*/

function cubeOdd(arr) {
  return arr.every(x => !isNaN(x))
    ? arr
        .filter(el => el % 2 !== 0)
        .map(el => el ** 3)
        .reduce((a, b) => a + b, 0)
    : undefined;
}
cubeOdd([50, 29, 37, 43, 0]);
