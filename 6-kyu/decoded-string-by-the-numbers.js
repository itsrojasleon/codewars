// Name
/*  
  Decoded String by the Numbers
*/

// Url
/* 
  https://www.codewars.com/kata/decoded-string-by-the-numbers/train/javascript
*/

// Instructions
/* 
  This is a simple string decoding algorithm. The idea is to take a string 
  of of characters and decode it into an array. 
  Each character is a single element in the result unless a backslash 
  followed by a positive number is encountered.

  When a backslash followed by a positive number is found, the number 
  indicates how many of the next characters are grouped together as one element.

  Example:

  "abc\5defghi\2jkl" => ["a", "b", "c", "defgh", "i", "jk", "l"]
  If the number is larger than the count of remaining character treat 
  it as reading the remaining characters.

  If you are reading characters, and you find an escape inside a string, 
  they should be tallied into the string:

  "\5ab\3cde" => ["ab\3c", "d", "e"]
*/

function decode(str) {
  let result = [];
  let idx = 0;
  let charCount = 0;
  let strCharCount = '';
  while (idx < str.length) {
    if (str[idx] === '\\') {
      // parse digits
      strCharCount = '';
      idx += 1;
      while (idx < str.length && (str[idx] >= '0' && str[idx] <= '9')) {
        strCharCount += str[idx++];
      }
      charCount = parseInt(strCharCount);
      let endIdx = idx + charCount;
      let strGroup =
        endIdx <= str.length ? str.substring(idx, endIdx) : str.substring(idx);
      result.push(strGroup);
      idx = endIdx;
    } else {
      result.push(str[idx++]);
    }
  }
  return result;
}

decode('abc');
