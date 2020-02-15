// Name
/*
  Help Bob count letters and digits.
*/
// Url
/*
  https://www.codewars.com/kata/5738f5ea9545204cec000155/solutions/javascript
*/
// Instructions
/*
  Bob is a lazy man.

  He needs you to create a method that can determine how many letters and digits are in a given string.

  Example:

  "hel2!lo" --> 6

  "wicked .. !" --> 6

  "!?..A" --> 1
*/

function countLettersAndDigits(input) {
  return input.replace(/[^A-Za-z0-9]+/g, '').length;
}
// countLettersAndDigits("hel2!lo");
countLettersAndDigits('n!!_ice!!123');
