// Name
/*
  Beginner - Lost Without a Map
*/

// Url
/*
  https://www.codewars.com/kata/beginner-lost-without-a-map/train/javascript
*/

// Instructions
/*
  Given an array of integers, return a new array with each value doubled.
  For example:
  [1, 2, 3] --> [2, 4, 6]
  For the beginner, try to use the map method - it comes in very 
  handy quite a lot so is a good one to know.
*/

function maps(x) {
  return x.map(v => v * 2);
}
maps([1, 2, 3]);
