// Name
/*
  Odd or Even?
*/
// Url
/*
  https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
*/
// Instructions
/*
  Caution: This kata does not currently have any known supported versions for TypeScript. It may not be completable due to dependencies on out-dated libraries/language versions.
  Task:
  Given a vector of numbers, determine whether the sum of all of the numbers is odd or even.

  Give your answer as a String matching "odd" or "even".

  If the input array is empty consider it as: [0] (array with a zero).

  Example:
  odd_or_even([0]) returns "even"
  odd_or_even([0, 1, 4]) returns "odd"
  odd_or_even([0, -1, -5]) returns "even"
*/

export function oddOrEven(array) {
  return array.reduce((acc, curr) => acc + curr, 0) % 2 === 0 ? 'even' : 'odd';
}
oddOrEven([0, 1, 5]);
