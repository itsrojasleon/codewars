// Name
/*
  All Star Code Challenge #3
*/

// Url
/*
  https://www.codewars.com/kata/all-star-code-challenge-number-3/train/javascript
*/

// Instructions
/*
  This Kata is intended as a small challenge for my students

  Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

  removeVowels("drake") // => "drk"
  removeVowels("aeiou") // => ""
*/

var removeVowels = function(str) {
  return str.replace(/[aeiou]/g, '');
};
