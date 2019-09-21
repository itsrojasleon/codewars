// Name
/*
  Enumerable Magic #25 - Take the First N Elements
*/

// Url
/*
  https://www.codewars.com/kata/enumerable-magic-number-25-take-the-first-n-elements/train/javascript
*/

// Instructions
/*
  Create a method take that accepts a list/array and a number n, 
  and returns a list/array array of the first n elements from the list/array.

  If you need help, here's a reference:
*/

function take(arr, n) {
  /*
  let a = [];
  if (arr.length === 0) return a;
  for (let i = 0; i < n; i++) {
    if (arr[i] || arr[i] === 0) {
      a.push(arr[i])
    }
  }
  return a;
  */

  return arr.slice(0, n);
}
take([0, 1, 2, 3, 5, 8, 13], 3);
