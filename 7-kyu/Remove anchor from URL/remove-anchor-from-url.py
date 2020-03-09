# Remove anchor from URL
# codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
# Complete the function/method so that it returns the url with anything after the anchor (#) removed.
  # Examples
  # // returns 'www.codewars.com'
  # removeUrlAnchor('www.codewars.com#about')

  # // returns 'www.codewars.com?page=1' 
  # removeUrlAnchor('www.codewars.com?page=1') 

def remove_url_anchor(url):
  # result = ''

  # for char in url:
  #   if char == '#':
  #     break
  #   result += char
  
  # return result
  return url.split('#')[0]

remove_url_anchor('www.codewars.com#about')