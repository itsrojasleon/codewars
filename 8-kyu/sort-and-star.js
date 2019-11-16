// Name
/*
  Sort and Star
*/

// Url
/*
  https://www.codewars.com/kata/sort-and-star/train/javascript
*/

// Instructions
/*
  You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

  The returned value must be a string, and have "***" between each of its letters.

  You should not remove or add elements from/to the array.
*/

function twoSort(s) {
  return [...s.sort()[0]]
    .map((str, i) => (i !== 0 ? '***' + str : str))
    .join('');
}

twoSort([
  'bitcoin',
  'take',
  'over',
  'the',
  'world',
  'maybe',
  'who',
  'knows',
  'perhaps',
]);
