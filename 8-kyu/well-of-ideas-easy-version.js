// Name
/*
  Well of Ideas - Easy Version
*/

// Url
/*
  https://www.codewars.com/kata/well-of-ideas-easy-version/train/javascript
*/

// Instructions
/*
  For every good kata idea there seem to be quite a few bad ones!

  In this kata you need to check the provided array (x) for good 
  ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, 
  return 'Publish!', if there are more than 2 return 'I smell a series!'. 
  If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x) {
  /*
  // Cool but a little large

  let good = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good') {
      good++;
    }
  }
  if (good >= 1 && good <= 2) {
    return 'Publish!';
  }
  if (good > 2) {
    return 'I smell a series!';
  } else {
    return 'Fail!';
  }
  */

  // Cool

  const results = x.filter(el => el === 'good');
  return results.length === 0
    ? 'Fail!'
    : results.length > 2
    ? 'I smell a series!'
    : 'Publish!';
}
