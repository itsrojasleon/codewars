// Url
/*
  https
*/

// Instructions
/*
  Given a month as an integer from 1 to 12, return to which 
  quarter of the year it belongs as an integer number.

  For example: month 2 (February), is part of the first quarter; 
  month 6 (June), is part of the second quarter; and month 11 (November), 
  is part of the fourth quarter.

  Assume that the value received is always an integer from 1 to 12
  The function must return an integer representing the quarter 
  of the year (1, 2, 3, 4)
*/

const quarterOf = month => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  }
};
quarterOf(4);
