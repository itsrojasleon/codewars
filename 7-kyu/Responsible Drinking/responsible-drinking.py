# Responsible Drinking

# https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/python

# Welcome to the Codewars Bar!
# Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

# Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

# Example parties:
# Input 0:
# "1 beer"

# Output 0:
# "1 glass of water"

# Explaination 0:
# You drank one standard drink

# Input 1:
# "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"

# Output 1:
# "10 glasses of water"

# Explaination 1:
# You drank ten standard drinks

# Note:

# To keep the things simple, we'll considere that any "numbered thing" in the string is a drink. Even "1 bear" => "1 glass of water" or "1 chainsaw and 2 pools" => "3 glasses of water"...

def hydrate(drink_string):
  numbers = []

  for string in drink_string:
    if string.isdigit():
      numbers.append(int(string))
  
  total = sum(numbers)

  return str(total) + ' glasses of water' if total > 1 else str(total) + ' glass of water'

hydrate("1 beer")