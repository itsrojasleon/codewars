// Name
/*
  Array.diff
*/
// Url
/*
  https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
*/
// Instructions
/*
  Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

  It should remove all values from list a, which are present in list b.

  array_diff([1,2],[1]) == [2]
  If a value is present in b, all of its occurrences must be removed from the other:

  array_diff([1,2,2,2,3],[2]) == [1,3]
*/

function array_diff(a, b) {
  if (!b.length || !a.length) return a;
  let result = [];

  for (let number of a) {
    if (!b.includes(number)) {
      result.push(number);
    }
  }
  return result;
}
