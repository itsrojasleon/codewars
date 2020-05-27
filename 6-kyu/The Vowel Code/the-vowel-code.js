// The Vowel Code
// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
/*
  Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

  a -> 1
  e -> 2
  i -> 3
  o -> 4
  u -> 5
  For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

  Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

  For example, decode("h3 th2r2") would return "hi there".

  For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

const vowels = ['a', 'e', 'i', 'o', 'u'];
const numbers = ['1', '2', '3', '4', '5'];

function encode(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      const idx = vowels.indexOf(string[i]);
      result += numbers[idx];
    } else {
      result += string[i];
    }
  }

  return result;
}

function decode(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (numbers.includes(string[i])) {
      const idx = numbers.indexOf(string[i]);
      result += vowels[idx];
    } else {
      result += string[i];
    }
  }

  return result;
}
