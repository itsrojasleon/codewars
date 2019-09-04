// Name
/*
  Sum of Minimums!
*/

// Url
/*
  https://www.codewars.com/kata/sum-of-minimums/train/javascript
*/

// Instructions
/*
  Given an 2D array of size m * n. Your task is to find the 
  sum of minimum value in each row.

  For Example:

  [
    [1, 2, 3, 4, 5], // minimum value of row is 1
    [5, 6, 7, 8, 9], // minimum value of row is 5
    [20, 21, 34, 56, 100] // minimum value of row is 20
  ]
  So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26

  Note: You will be always given non-empty array containing Positive values.

  ENJOY CODING :)
*/
function sumOfMinimums(arr) {
  /*
  let min = [];

  for (let a of arr) {
    min.push(Math.min(...a));
  }
  return min.reduce((a, b) => a + b, 0);
  */

  // Fancy
  return arr.map(el => Math.min(...el)).reduce((a, b) => a + b, 0);
}
sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]);
