// Name
/*
  Number Of Occurrences
*/
// Url
/*
  https://www.codewars.com/kata/52829c5fe08baf7edc00122b/train/javascript
*/
// Instructions
/*
  Write a functionthat returns the number of occurrences of an element in an array.

  Examples
  var arr = [0, 1, 2, 2, 3];
  arr.numberOfOccurrences(0) === 1;
  arr.numberOfOccurrences(4) === 0;
  arr.numberOfOccurrences(2) === 2;
  arr.numberOfOccurrences("a") === 0;
*/

Array.prototype.numberOfOccurrences = function() {
  return this.filter(num => num === arguments[0]).length;
};
