// Name
/*  
  Regexp Basics - is it a digit?
*/

// Url
/*
  https://www.codewars.com/kata/regexp-basics-is-it-a-digit/train/javascript
*/

// Instructions
/*
  Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
*/

String.prototype.digit = function() {
  return /^\d$/g.test(this);
};

'7'.digit();
