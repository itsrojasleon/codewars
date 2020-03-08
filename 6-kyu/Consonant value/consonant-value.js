// Name
/*
  Consonant value
*/
// Url
/*
  https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript
*/
// Instructions
/*
  Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alpahabet except "aeiou".

  We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

  For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

  -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
  solve("zodiacs") = 26

  For the word "strength", solve("strength") = 57
  -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
  For C: do not mutate input.

  More examples in test cases. Good luck!
*/

function solve(s) {
  let strs = s.split(/[aeiou]/gi).filter(str => str !== '');
  let values = [];

  for (let char of strs) {
    if (char.length > 1) {
      let sum = 0;
      for (let c of char) {
        sum += c.charCodeAt(0) - 96;
      }
      values.push(sum);
    } else {
      values.push(char.charCodeAt(0) - 96);
    }
  }
  return Math.max(...values);
}
