// Array element parity
// https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript

function solve(arr) {
  // let obj = {};

  // for (let num of arr) {
  //   let obsNumber = Math.abs(num);
  //   if (obj[obsNumber]) {
  //     obj[obsNumber].push(num);
  //   } else {
  //     obj[obsNumber] = [num];
  //   }
  // }

  // for (let prop in obj) {
  //   if (obj[prop].reduce((acc, curr) => acc + curr, 0) !== 0) {
  //     return obj[prop][0];
  //   }
  // }

  return arr.find((num) => !arr.includes(Math.abs(num)));
}

solve([-110, 110, -38, -38, -62, 62, -38, -38, -38]); // -38
