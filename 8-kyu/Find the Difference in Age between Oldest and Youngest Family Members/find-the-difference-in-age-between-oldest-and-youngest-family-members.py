# Find the Difference in Age between Oldest and Youngest Family Members
# https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/solutions/javascript

def difference_in_ages(ages):
  return (min(ages), max(ages), max(ages) - min(ages))
