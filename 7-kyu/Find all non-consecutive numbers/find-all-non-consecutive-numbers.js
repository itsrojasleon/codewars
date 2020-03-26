// Name
/*
  Find all non-consecutive numbers
*/
// Url
/*
  https://www.codewars.com/kata/58f8b35fda19c0c79400020f/train/javascript
*/
// Instructions
/*
  Your task is to find all the elements of an array that are non consecutive.

  A number is non consecutive if it is not exactly one larger than the previous element in the array. The first element gets a pass and is never considered non consecutive.

  Create a function named allNonConsecutive

  E.g., if we have an array [1,2,3,4,6,7,8,10] then 6 and 10 are non-consecutive.

  You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.

  E.g., for the above array the result should be:

  [
    {i: 4, n:6},
    {i: 7, n:10}
  ]
  If the whole array is consecutive or has one element then return an empty array.

  The array elements will all be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive and/or negetive.

  If you like this kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
*/

function allNonConsecutive(arr) {
  /*
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      result.push({ i: i + 1, n: arr[i + 1] });
    }
  }

  return result.slice(0, result.length - 1);
  */

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i + 1]) {
      break;
    }
    if (arr[i + 1] - arr[i] !== 1) {
      result.push({ i: i + 1, n: arr[i + 1] });
    }
  }

  return result;
}
