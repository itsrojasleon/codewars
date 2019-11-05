// Name
/*
  Array plus array
*/

// Url
/*
  https://www.codewars.com/kata/array-plus-array/train/javascript
*/

// Instructions
/*
  I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
  P.S. Each array includes only integer numbers. Output is a number too.
*/

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a, b) => a + b, 0);
}
arrayPlusArray([1, 2, 3], [4, 5, 6]);
