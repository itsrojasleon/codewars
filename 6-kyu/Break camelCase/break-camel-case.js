// Name
/*
  Break camelCase
*/
// Url
/*
  https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
*/
// Instructions
/*
  Complete the solution so that the function will break up camel casing, using a space between words.

  Example
  solution("camelCasing")  ==  "camel Casing"
*/

function solution(string) {
  // let newString = '';
  // for (let i = 0; i < string.length; i++) {
  //   if (string[i] === string[i].toUpperCase()) {
  //     newString += ' ';
  //   }
  //   newString += string[i];
  // }
  // return newString;

  return string.split(/(?=[A-Z])/).join(' ');
}

solution('camelCasing');
