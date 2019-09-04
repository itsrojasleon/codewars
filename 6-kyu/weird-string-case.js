// Name
/*
  WeIrD StRiNg CaSe
*/

// Url
/*
  https://www.codewars.com/kata/weird-string-case/train/javascript
*/

// Instructions
/*
  Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, 
  and returns the same string with all even indexed characters in each word 
  upper cased, and all odd indexed characters in each word lower cased. 
  The indexing just explained is zero based, so the zero-ith index is even, 
  therefore that character should be upper cased.

  The passed in string will only consist of alphabetical characters and spaces(' ').
  Spaces will only be present if there are multiple words. 
  Words will be separated by a single space(' ').
*/

// Examples
/*
  toWeirdCase( "String" );//=> returns "StRiNg"
  toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

function toWeirdCase(string) {
  /*

  // Good solution but a little bit large

  let splitted = string.split(' ');
  let result = '';

  for (let i = 0; i < splitted.length; i++) {
    for (let j = 0; j < splitted[i].length; j++) {
      if (j % 2 === 0) {
        result += splitted[i][j].toUpperCase() + '';
      } else {
        result += splitted[i][j];
      }
    }
    result += ' ';
  }
  return result.trim();
  */

  return string
    .split(' ')
    .map(word =>
      word
        .split('')
        .map((letter, index) =>
          index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
        )
        .join('')
    )
    .join(' ');
}
// toWeirdCase('This');
toWeirdCase('This is a test');
