// Name
/*
  Remove String Spaces
*/

// Url
/*
  https://www.codewars.com/kata/remove-string-spaces/train/javascript
*/

// Instructions
/*
  Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x) {
  return x.replace(/\s+/g, '').trim();
}
noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');
