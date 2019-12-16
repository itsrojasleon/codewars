// Name
/*
  Numbers to Letters
*/

// Url
/*
  https://www.codewars.com/kata/numbers-to-letters/train/javascript
*/

// Instructions
/*
  Given an array of numbers, you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.
*/

function switcher(x) {
  // let result = '';

  // for (let char of x) {
  //   if (Number(char) <= 26) {
  //     result += String.fromCharCode(123 - char);
  //   } else {
  //     if (char === '27') result += '!';
  //     else if (char === '28') result += '?';
  //     else result += ' ';
  //   }
  // }
  // return result;

  let result = '';

  x.map(str => {
    str === '27'
      ? (result += '!')
      : str === '28'
      ? (result += '?')
      : str === '29'
      ? (result += ' ')
      : (result += String.fromCharCode(123 - str));
  });
  return result;
}
// switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4'])
