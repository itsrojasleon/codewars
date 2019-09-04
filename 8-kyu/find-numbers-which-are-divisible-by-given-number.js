// Name
/*
  Find numbers which are divisible by given number
*/

// Url
/*
  https://www.codewars.com/kata/find-numbers-which-are-divisible-by-given-number/train/javascript
*/

// Instructions
/*
  Complete the function which takes two arguments and returns 
  all numbers which are divisible by the given divisor. 
  First argument is an array of numbers and the second is the divisor.

  Example
  divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
*/

function divisibleBy(numbers, divisor) {
  return numbers.filter(n => n % divisor === 0);
}
divisibleBy([1, 2, 3, 4, 5, 6], 2);
