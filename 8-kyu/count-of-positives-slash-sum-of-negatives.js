// Name
/*
  Count of positives / sum of negatives
*/

// Url
/*
  https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/train/javascript
*/

// Instructions
/*
  Given an array of integers.

  Return an array, where the first element is the count of positives numbers 
  and the second element is sum of negative numbers.

  If the input array is empty or null, return an empty array.

  Example
  For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], 
  ou should return [10, -65].
*/

function countPositivesSumNegatives(input) {
  return input === null || input.length === 0
    ? []
    : [
        input.filter(num => num > 0).length,
        input.filter(num => num < 0).reduce((a, b) => a + b, 0)
      ];
}

var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
countPositivesSumNegatives(testData);
