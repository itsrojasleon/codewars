# What is between?

# https://www.codewars.com/kata/what-is-between/train/python

# Write a function taking two parameters and returning an int array of all elements between the input parameters and including them.

def between(a,b):
  result = []
  for i in range(a, b + 1):
      result.append(i)
  print(result)

# between(1,4)
