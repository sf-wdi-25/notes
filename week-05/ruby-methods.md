#Ruby functions vs Javascript functions

Please refer to the [Ruby Style Guide](https://github.com/bbatsov/ruby-style-guide) for conventions and methodologies:

These are the same functions that we went over for javascript.
[Here is the original javscript version page] (https://github.com/sf-wdi-25/notes/tree/master/week-01-controlling-the-dom/day-03-js/dawn-functions)

```ruby
# Please refer to the Ruby Style Guide for conventions and methodologies:
# https://github.com/bbatsov/ruby-style-guide

####################
#
#  Hello, World!!
#
####################

# output a String to the display
def helloWorld
  "Hello, World!"
end

puts helloWorld


# output a String and a parameter to the display
def greetPerson(name)
  "Hello, " + name
end

name = 'Justin'
puts greetPerson name


####################
#
#  Mathematics!
#
####################

# add two integers
x = 12
y = 3

def sum(a, b)
  a + b
end

puts sum(x, y)


def subtract(a, b)
  a - b
end

puts subtract(x, y)


def multiply(a, b)
  a * b
end

puts multiply(x, y)


def divide(a, b)
  a /  b
end

puts divide(x, y)


def numbersToStars(num)
  stars = ''
  num.times do
    stars.concat('*')
  end
  return stars
end

puts numbersToStars(x)


def print0toNum(num)
  output = ''
  num.times do |i|
    output += i.to_s + ' '
  end
  return output
end

puts print0toNum(x)


def printNumToZero(num)
  output = ''
  while num >= 0
    output += num.to_s + ' '
    num -= 1;
  end
  return output
end

puts printNumToZero(x)

#########################
#
#  String manipulation!
#
#########################

phraseL = 'these pretzels are making me thirsty'
phraseU = 'I SEE DEAD PEOPLE'
phraseE = 'Serenity Now'

def shout(phrase)
  phrase.upcase
end

puts shout phraseL


def whisper(phrase)
  phrase.downcase
end

puts whisper phraseU


def exclaim(phrase)
  phrase + "!"
end

puts exclaim phraseE


#########################
#
#  Return Values!
#
#########################

def square(a)
  return a**2
end

squaredFour = square(4)
puts squaredFour


# demonstration of scope differences with Ruby vs. JS
banana = 1
def sliceBanana(slices)
  banana = slices

  return banana
end

puts sliceBanana(4)
puts banana


def multiplyBySix(x)

  mult = 6
  x = x * mult

  return x
end

puts multiplyBySix(4)


#########################
#
#  Return Values!
#
#########################

def hasCheezburger?(answer)
  if (answer===true)
    'Can I haz ur Cheezburger?'
  else
    'Y no Cheezburger?'
  end
end

puts hasCheezburger?(true)

def isGreaterThanFive?(number)
  if(number>5)
    return true
  else
    return false
  end
end

puts isGreaterThanFive?(7)


def completelyDisagree?(bool)
  if(bool===true)
    return false
  else
    return true
  end
end

puts completelyDisagree?(true)


def isThisTruthy?(something)
  truthiness = (something === true)
end

puts isThisTruthy?(4)


#########################
#
#  Recursion
#
#########################

# Display all numbers from num to 0 on the screen
def countDown(num)
    # Base Case
    if(num < 0 )
        return
    else
        # Action Steps
        puts num
        num = num - 1;
        # Recursive Steps
        countDown(num)
    end
end

countDown(10)

```
