// Name
/*
  Sum of differences in array
*/

// Url
/*
  https://www.codewars.com/kata/sum-of-differences-in-array/train/javascript
*/

// Instructions
/*
  Your task is to sum the differences between consecutive pairs in the array in 
  descending order.

  For example: sumOfDifferences([1, 2, 10]) Returns 9

  Descending order: [10, 2, 1]

  Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

  If the array is empty or the array has only one element the result should 
  be 0 (Nothing in Haskell).
*/

function sumOfDifferences(arr) {
  let sorted = arr.sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < sorted.length; i++) {
    result += sorted[i] - sorted[i + 1] || 0;
  }
  return result;
}
sumOfDifferences([1, 2, 10]);
