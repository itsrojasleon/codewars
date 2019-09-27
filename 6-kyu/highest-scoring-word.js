// Name
/*
  Highest Scoring Word
*/

// Url
/*
  https://www.codewars.com/kata/highest-scoring-word/train/javascript
*/

// Instructions
/*
  Given a string of words, you need to find the highest scoring word.

  Each letter of a word scores points according to its position in the 
  alphabet: a = 1, b = 2, c = 3 etc.

  You need to return the highest scoring word as a string.

  If two words score the same, return the word that appears earliest in the 
  original string.

  All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  if (!x || !x.split(' ').join('')) return '';

  let map = {};
  let max = 0;
  let maxWord;
  let n = 96;

  for (let word of x.split(' ')) {
    for (let char of word) {
      map[word] = map[word] + char.charCodeAt(0) - n || char.charCodeAt(0) - n;
    }
  }

  for (let char in map) {
    if (map[char] > max) {
      max = map[char];
      maxWord = char;
    }
  }
  return maxWord;
}
high('man i need a taxi up to ubud');
