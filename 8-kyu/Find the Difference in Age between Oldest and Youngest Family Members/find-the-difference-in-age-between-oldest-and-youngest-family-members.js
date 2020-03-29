// Name
/*
  Find the Difference in Age between Oldest and Youngest Family Members
*/
// Url
/*
  https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript
*/

function differenceInAges(ages) {
  const min = Math.min(...ages);
  const max = Math.max(...ages);

  return [min, max, max - min];
}
