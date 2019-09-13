// Name
/*
  get character from ASCII Value
*/

// Url
/*
  https://www.codewars.com/kata/get-character-from-ascii-value/train
*/

// Instructions
/*
  Write a function which takes a number and returns the corresponding ASCII char for that value.

  Example:

  get_char(65) # => 'A'
  For ASCII table, you can refer to http://www.asciitable.com/
*/

function getChar(c) {
  return String.fromCharCode(c);
}
getChar(65);
