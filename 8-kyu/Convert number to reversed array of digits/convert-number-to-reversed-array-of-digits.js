// Name
/*
  Convert number to reversed array of digits
*/
// Url
/*
  https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
*/
// Instructions
/*
  Convert number to reversed array of digits
  Given a random number:

  C#: long;
  C++: unsigned long;
  You have to return the digits of this number within an array in reverse order.

  Example:
  348597 => [7,9,5,8,4,3]
*/

function digitize(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map(Number);
}
digitize(35231);
