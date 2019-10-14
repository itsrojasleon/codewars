// Name
/*
  Invert values
*/

// Url
/*
  https://www.codewars.com/kata/invert-values/train/javascript
*/

// Instructions
/*
  Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

  invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
  invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
  invert([]) == []
*/

function invert(array) {
  return array.map(n => n * -1);
}
invert([1, 2, 3, 4, 5]);
