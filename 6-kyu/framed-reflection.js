// Name
/*
  Framed Reflection
*/

// Url
/*
  Framed Reflection
*/

// Instructions
/*
  100th Kata
  You are given a message (text) that you choose to read in a mirror (weirdo). 
  Return what you would see, complete with the mirror frame. Example:

  'Hello World'

  would give:


  Words in your solution should be left-aligned.
*/

function mirror(text) {
  let a = text.split(' ');
  let m = Math.max(...a.map(x => x.length));
  a = a.map(
    x => '* ' + [...x].reverse().join('') + ' '.repeat(m - x.length) + ' *'
  );
  return ['*'.repeat(m + 4), ...a, '*'.repeat(m + 4)].join('\n');
}
mirror('Hello World');
