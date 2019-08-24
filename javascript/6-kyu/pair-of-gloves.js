// URL:
/*
  https://www.codewars.com/kata/pair-of-gloves/train/javascript
*/

// Instructions
/*
Pair of gloves
Winter is comming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
A pair of gloves is constituted of two gloves of the same color.
You are given an array containing the color of each glove.
You must return the number of pair you can constitute.
You must not change the input array.
*/

// Example :

/*
let myGloves = ['red','green','red','blue','blue'];
numberOfPairs(myGloves) == 2;// red and blue

let redGloves = ['red','red','red','red','red','red'];
numberOfPairs(redGloves) == 3; // 3 red pairs
*/

function numberOfPairs(gloves) {
  let structure = {};
  let count = 0;

  for (let glove of gloves) {
    structure[glove] = structure[glove] + 1 || 1;
  }

  for (let glove in structure) {
    count += Math.floor(structure[glove] / 2);
  }
  return count;
}

let myGloves = ['red', 'green', 'red', 'blue', 'blue'];
numberOfPairs(myGloves);

// let redGloves = ['red','red','red','red','red','red'];
// numberOfPairs(redGloves)
