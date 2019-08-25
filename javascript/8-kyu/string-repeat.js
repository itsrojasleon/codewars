// Name
/*
  String repeat
*/

// Url
/*
  https://www.codewars.com/kata/string-repeat/train/javascript
*/

// Instructions
/*
  Write a function called repeatString which repeats the given 
  String src exactly count times.
*/

// Examples
/*
  repeatStr(6, "I") // "IIIIII"
  repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr(n, s) {
  let result = s;
  for (let i = 1; i < n; i++) {
    result += s;
  }
  return result;
}
repeatStr(3, '*');
