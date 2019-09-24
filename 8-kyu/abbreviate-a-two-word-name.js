// Name
/*
  Abbreviate a Two Word Name
*/

// Url
/*
  https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript
*/

// Instructions
/*
  Write a function to convert a name into initials. 
  This kata strictly takes two words with one space in between them.

  The output should be two capital letters with a dot seperating them.

  It should look like this:

  Sam Harris => S.H

  Patrick Feeney => P.F
*/

function abbrevName(name) {
  return (
    name.charAt(0).toUpperCase() + '.' + name.split(' ')[1][0].toUpperCase()
  );
}
abbrevName('Sam Harris');
