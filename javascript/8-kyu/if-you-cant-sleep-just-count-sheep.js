// Name
/*
  If you can't sleep, just count sheep!!
*/

// Url
/*
  https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep/train/javascript
*/

// Instructions
/*
  If you can't sleep, just count sheep!!

  Task:
  Given a non-negative integer, 3 for example, return a string 
  with a murmur: "1 sheep...2 sheep...3 sheep...". 
  Input will always be valid, i.e. no negative integers.
*/

const countSheep = num => {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += `${i + 1} sheep...`;
  }
  return result;
};
countSheep(1);
