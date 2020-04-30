// Bugfixing: Swap values
// https://www.codewars.com/kata/5ea9ebfa14d1dc0024000656/train/javascript

// The Initial code has a bug.

// What is the smallest change you can make to fix it?

// function nop([a,b,c,d]) {
//   [a,b] = [b,a]
//   [c,d] = [d,c]
//   return [b,a,d,c]
// }

function nop([a, b, c, d]) {
  return [a, b, c, d];
}

// function nop(nums) {
//   return nums;
// }
