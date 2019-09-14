// Name
/*
  Grasshopper - Terminal game combat function
*/

// Url
/*
  https://www.codewars.com/kata/grasshopper-terminal-game-combat-function-1/train/javascript
*/

// Instructions
/*
  Create a combat function that takes the player's current health and the 
  amount of damage recieved, and returns the player's new health. 
  Health can't be less than 0.
*/

function combat(health, damage) {
  return health > damage ? health - damage : 0;
}
combat(100, 5);
