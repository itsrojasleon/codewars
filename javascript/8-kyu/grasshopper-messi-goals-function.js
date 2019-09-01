// Name
/*
  Grasshopper - Messi goals function
*/

// Url
/*
  https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
*/

// Instructions
/*
  Messi is a soccer player with goals in three leagues:

  LaLiga
  Copa del Rey
  Champions.

  Complete the goals function to return his total goals (the sum) 
  for all three leagues.

  Note: the parameter for this function will always be a valid number.
*/

// Examples
/*
  goals(5,10,2) == 5+10+2 = 17
*/

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

goals(5, 10, 2);
