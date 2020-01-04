// Name
/*
  Format a string of names like 'Bart, Lisa & Maggie'.
*/
// Url
/*
  https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript
*/
// Instructions
/*
  Given: an array containing hashes of names

  Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

  Example:

  list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
  // returns 'Bart, Lisa & Maggie'

  list([ {name: 'Bart'}, {name: 'Lisa'} ])
  // returns 'Bart & Lisa'

  list([ {name: 'Bart'} ])
  // returns 'Bart'

  list([])
  // returns ''
  Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/
function list(names) {
  let values = [];

  for (let obj of names) {
    for (let name in obj) {
      values.push(obj[name]);
    }
  }
  if (values.length === 1) return values[0];
  if (values.length === 2) return `${values[0]} & ${values[1]}`;

  let superResult = '';
  for (let i = 0; i < values.length; i++) {
    if (i === values.length - 1) superResult += ' & ' + values[i];
    else if (i === values.length - 2) superResult += values[i];
    else superResult += values[i] + ', ';
  }

  return superResult;
}
