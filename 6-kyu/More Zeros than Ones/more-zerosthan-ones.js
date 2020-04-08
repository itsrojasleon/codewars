/*
  More Zeros than Ones
*/
/*
  https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript
*/
/*
  Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

  You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

  Examples

  'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
                True       True       False      True       False

          --> ['a','b','d']

  'DIGEST'--> ['D','I','E','T']
  All input will be valid strings of length > 0. Leading zeros in binary should not be counted.
*/

function moreZeros(s) {
  let binaryArr = [];
  let binaryArrFilered = [];
  let result = [];

  // string to binary
  for (let str of s) {
    binaryArr.push(str.charCodeAt(0).toString(2));
  }

  // Count zeros and ones
  for (let binaryStr of binaryArr) {
    let zeros = 0;
    let ones = 0;

    for (let char of binaryStr) {
      if (char === '1') {
        ones += 1;
      } else {
        zeros += 1;
      }
    }

    if (zeros > ones) {
      binaryArrFilered.push(binaryStr);
    }
  }

  // binary to string
  for (let binaryStr of binaryArrFilered) {
    result.push(String.fromCharCode(parseInt(binaryStr, 2)));
  }

  return [...new Set(result)];
}

moreZeros('abcde');
