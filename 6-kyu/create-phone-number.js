// Name
/*
  Create Phone Number
*/

// Url
/*
  https://www.codewars.com/kata/create-phone-number/train/javascript
*/

// Instructions
/*
  Write a function that accepts an array of 10 integers (between 0 and 9), 
  that returns a string of those numbers in the form of a phone number.

  Example:
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  The returned format must be correct in order to complete this challenge.
  Don't forget the space after the closing parenthesis!
*/

function createPhoneNumber(numbers) {
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
