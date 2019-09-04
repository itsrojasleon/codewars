// Name
/*
  Square(n) Sum
*/

// Url
/*
  https://www.codewars.com/kata/square-n-sum/train/javascript
*/

// Instructions
/**
  Complete the square sum function so that it squares each number 
  passed into it and then sums the results together.

  For example, 
  for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers) {
  // let result = 0;
  // for (let i = 0; i < numbers.length; i++) {
  //   result += numbers[i]**2;
  // }
  // return result;

  return numbers.reduce((sum, n) => n * n + sum, 0);
}
squareSum([0, 3, 4, 5]);
