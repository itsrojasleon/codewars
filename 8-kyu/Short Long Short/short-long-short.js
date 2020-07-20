// Short Long Short
// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript

function solution(a, b) {
  const long = a.length >= b.length ? a : b;
  const short = a.length <= b.length ? a : b;

  // return short + long + short;
  return `${short}${long}${short}`;
}
