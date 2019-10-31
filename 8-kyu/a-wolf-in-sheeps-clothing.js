// Name
/*
  A wolf in sheep's clothing
*/

// Url
/*
  https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
*/

// Instructions
/*
  A wolf in sheep's clothing
  Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

  Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

  [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
    7      6      5      4      3            2      1
  If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

  Note: there will always be exactly one wolf in the array.

  Examples
  warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) === "Oi! Sheep number 1! You are about to be eaten by a wolf!"

  warnTheSheep(["sheep", "sheep", "wolf"]) === "Pls go away and stop eating my sheep"
*/

function warnTheSheep(queue) {
  /*
  let reversed = queue.reverse();
  let position;

  if (reversed[0] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
  } else {
    for (let i = 0; i < reversed.length; i++) {
      if (reversed[i] === 'wolf') position = i;
    }
    return `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
  }
  */

  let pos = queue.reverse().indexOf('wolf');
  return pos === 0
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${pos}! You are about to be eaten by a wolf!`;
}
warnTheSheep(['sheep', 'sheep', 'sheep', 'wolf', 'sheep']);
