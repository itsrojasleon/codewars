// Name
/*
  Thinking & Testing : Uniq or not Uniq
*/

// Url
/*
  https://www.codewars.com/kata/thinking-and-testing-uniq-or-not-uniq/train/javascript
*/

// Instructions
/*
  No Story

  No Description

  Only by Thinking and Testing

  Look at result of testcase, guess the code!
*/

function testit(a, b) {
  return [...new Set(a), ...new Set(b)].sort((a, b) => a - b);
}

testit([1, 2], [3, 4]);
