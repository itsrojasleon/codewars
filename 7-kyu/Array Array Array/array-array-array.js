// Name
/*
  Array Array Array
*/
// Url
/*
  https://www.codewars.com/kata/array-array-array/train/javascript
*/
// Instructions
/*
  You are given an initial 2-value array (x). You will use this to calculate a score.

  If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

  Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

  For example:

  if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/

function loop(times, x) {
  return Array(times).fill(x);
}

function checkNum(value) {
  return typeof value === 'number';
}

function explode(x) {
  const [a, b] = x;

  return !checkNum(a) && !checkNum(b)
    ? 'Void!'
    : checkNum(a) && checkNum(b)
    ? loop(a + b, x)
    : !checkNum(a)
    ? loop(b, x)
    : checkNum(a)
    ? loop(a, x)
    : null;
}
