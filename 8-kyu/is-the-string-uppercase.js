// Name
/*
  Is the string uppercase?
*/

// Url
/*
  https://www.codewars.com/kata/is-the-string-uppercase/train/javascript
*/

// Instructions
/*
  Add the isUpperCase method to String to see whether the 
  string is ALL CAPS. For example:

  "c".isUpperCase() == false
  "C".isUpperCase() == true
  "hello I AM DONALD".isUpperCase() == false
  "HELLO I AM DONALD".isUpperCase() == true
  "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
  "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
  Corner Cases
  For simplicity, you will not be tested on the ability to 
  handle corner cases (e.g. "%*&#()%&^#" or similar strings 
  containing alphabetical characters at all) - an ALL CAPS (uppercase) 
  string will simply be defined as one containing no lowercase letters. 
  Therefore, according to this definition, 
  strings with no alphabetical characters (like the one above) should return True.
*/

String.prototype.isUpperCase = function() {
  return this.valueOf() === this.valueOf().toUpperCase();
};

''.isUpperCase();
