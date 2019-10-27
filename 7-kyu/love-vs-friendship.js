// Name
/*
  Love vs friendship
*/

// Url
/*
  https://www.codewars.com/kata/love-vs-friendship/train/javascript
*/

// Instructions
/*
  If　a = 1, b = 2, c = 3 ... z = 26

  Then l + o + v + e = 54

  and f + r + i + e + n + d + s + h + i + p = 108

  So friendship is twice stronger than love :-)

  The input will always be in lowercase and never be empty.
*/

function wordsToMarks(string) {
  let result = 0;

  for (let char of string) {
    result += char.charCodeAt(0) - 96;
  }
  return result;
}
wordsToMarks('attitude');
