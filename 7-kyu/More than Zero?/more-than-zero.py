# More than Zero?
# https://www.codewars.com/kata/55a710b462afc49a540000b9/train/python

# Correct this code so that it takes one argument, x, and returns "x is more than zero" if x is positive 
# (and nonzero), and otherwise, returns "x is equal to or less than zero." In both cases, replace x with 
# the actual value of x.


def corrections(x):
  if x > 0:
    return str(x) + ' is more than zero.'
  else:
    return str(x) + ' is equal to or less than zero.'
