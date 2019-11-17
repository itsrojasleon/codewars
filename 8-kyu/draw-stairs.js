// Name
/*
  Draw stairs
*/

// Url
/*
  https://www.codewars.com/kata/draw-stairs/train/javascript
*/

// Instructions
/*
  given a number n, draw stairs with 'I' n tall and n wide, with the tallest in the top left. Example (with - to represent spaces; DO NOT USE THEM IN THE SOLUTIONS! USE SPACES IN SOLUTION! the "-"s are for clarity.): draw_stairs(3) == '''I\n_I\n__I'''

For example, a 7-step stairs should be drawn like this:

  const sevenStepStairs = drawStairs(7);
  I
  I
    I
    I
      I
      I
        I
*/

function drawStairs(n) {
  let spaces = '';
  let str = '';

  if (n > 1) {
    for (let i = 0; i < n; i++) {
      spaces += ' ';
      str += 'I\n' + spaces;
    }
    return str.trim();
  } else {
    return 'I';
  }
}

drawStairs(4);
