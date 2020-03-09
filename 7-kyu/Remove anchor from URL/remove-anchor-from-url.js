// Name
/*
  Remove anchor from URL
*/
// Url
/*
  https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
*/
// Instructions
/*
  Complete the function/method so that it returns the url with anything after the anchor (#) removed.

  Examples
  // returns 'www.codewars.com'
  removeUrlAnchor('www.codewars.com#about')

  // returns 'www.codewars.com?page=1' 
  removeUrlAnchor('www.codewars.com?page=1') 
*/

function removeUrlAnchor(url) {
  let result = '';

  for (let char of url) {
    if (char === '#') {
      break;
    }
    result += char;
  }

  return result;
  // return url.split('#')[0];
  // return url.replace(/#.*/gi, '');
}
