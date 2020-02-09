// Name
/*
  No oddities here
*/
// Url
/*
  https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript
*/
// Name
/*
  Write a small function that returns the values of an array that are not odd.

  All values in the array will be integers. Return the good values in the order they are given.

  function noOdds( values )
*/

function noOdds(values) {
  // let evenNumbers = [];
  // for (let value of values) {
  //   if (value % 2 === 0) evenNumbers.push(value);
  // }
  // return evenNumbers;

  return values.filter(value => value % 2 === 0);
}
