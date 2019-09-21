// Name
/*
  Split Strings
*/

// Url
/*
  https://www.codewars.com/kata/split-strings/train/javascript
*/

// Instructions
/*
  Complete the solution so that it splits the string into pairs of two 
  characters. If the string contains an odd number of characters then it 
  should replace the missing second character of the final pair with an 
  underscore ('_').

  Examples:

  solution('abc') // should return ['ab', 'c_']
  solution('abcdef') // should return ['ab', 'cd', 'ef']
*/
function solution(str) {
  let array = str.split('');
  let collector = [];
  let result = [];

  for (let i = 0; i < array.length; i = i + 2) {
    collector.push([array[i], array[i + 1] || '']);
  }
  for (let i = 0; i < collector.length; i++) {
    let pairString = '';
    pairString = collector[i].join('');
    result.push(pairString);
  }
  if (result[result.length - 1].length % 2 !== 0) {
    result[result.length - 1] += '_';
  }
  return result;
}
solution('abc');
