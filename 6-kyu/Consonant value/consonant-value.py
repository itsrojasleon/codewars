import re

def solve(s):
  results = []
  strs = list(filter(None, re.compile("[aeiou]").split(s)))
  for char in strs:
    if len(char) > 1:
      sum = 0
      for c in char:
        sum += ord(c) - 96
      results.append(sum)
    else:
      results.append(ord(char) - 96)
  
  return max(results)
  
solve("zodiacs")