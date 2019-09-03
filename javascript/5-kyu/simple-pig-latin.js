// Name
/*
  Simple Pig Latin 
*/

// Url
/*
  https://www.codewars.com/kata/simple-pig-latin/train/javascript
*/

// Instructions
/*
  Move the first letter of each word to the end of it, then add "ay" to 
  the end of the word. Leave punctuation marks untouched.
*/

// Examples
/*
  pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
  pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
  let result = '';

  for (let word of str.split(' ')) {
    if (word.match(/[A-Za-z]/)) {
      result += word.slice(1) + word[0] + 'ay' + ' ';
    } else {
      result += word;
    }
  }
  return result.trim();
}
pigIt('Pig latin is cool');
