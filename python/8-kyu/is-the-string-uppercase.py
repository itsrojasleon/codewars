# Name
"""
Is the string uppercase?
"""

# Url
"""
https://www.codewars.com/kata/is-the-string-uppercase/train/python
"""

# Instructions
"""
Create a method is_uppercase() to see whether the string is ALL CAPS. For example:

is_uppercase("c") == False
is_uppercase("C") == True
is_uppercase("hello I AM DONALD") == False
is_uppercase("HELLO I AM DONALD") == True
is_uppercase("ACSKLDFJSgSKLDFJSKLDFJ") == False
is_uppercase("ACSKLDFJSGSKLDFJSKLDFJ") == True
Corner Cases
For simplicity, you will not be tested on the ability to handle corner cases (e.g. "%*&#()%&^#" or similar strings containing alphabetical characters at all) - an ALL CAPS (uppercase) string will simply be defined as one containing no lowercase letters. Therefore, according to this definition, strings with no alphabetical characters (like the one above) should return True.
"""


def is_uppercase(inp):
  if inp == inp.upper():
    return True
  else:
    return False

is_uppercase("Hello")
