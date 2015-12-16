#Ruby functions vs Javascript functions

Please refer to the [Ruby Style Guide](https://github.com/bbatsov/ruby-style-guide) for conventions and methodologies:

These are the same functions that we went over for javascript.
[Here is the original javscript version page] (https://github.com/sf-wdi-25/notes/tree/master/week-01-controlling-the-dom/day-03-js/dawn-functions)

```ruby
####################
#
#  Hello, World!!
#
####################

# output a String to the display
def helloWorld
  "Hello, World!"
end

# output a String and a parameter to the display
def greetPerson(name)
  "Hello, " + name
end


#### Begin Function Calls
name = 'Justin'
puts helloWorld
puts greetPerson name
### End Function Calls


####################
#
#  Mathematics!
#
####################

# add two integers
def sum(a, b)
  a + b
end

def subtract(a, b)
  a - b
end

def multiply(a, b)
  a * b
end

def divide(a, b)
  a /  b
end


#### Begin Function Calls
x = 12
y = 3
puts sum x, y
puts subtract x, y
puts multiply x, y
puts divide x, y
#### End Function Calls


#########################
#
#  String manipulation!
#
#########################

def shout(phrase)
  phrase.upcase
end

def whisper(phrase)
  phrase.downcase
end

def exclaim(phrase)
  phrase + "!"
end

#### Begin Function Calls
phraseL = 'these pretzels are making me thirsty'
phraseU = 'I SEE DEAD PEOPLE'
phraseE = 'Serenity Now'

puts shout phraseL
puts whisper phraseU
puts exclaim phraseE
#### End Function Calls


#########################
#
#  Return Values!
#
#########################

def square(a)
  return a**2
end

# demonstration of scope differences with Ruby vs. JS
def sliceBanana(slices)
  banana = slices

  return banana
end

def multiplyBySix(x)

  mult = 6
  x = x * mult

  return x
end

squaredFour = square(4)
puts squaredFour

banana = 1
puts sliceBanana(4)
puts banana


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

def isGreaterThanFive?(number)
  if(number>5)
    return true
  else
    return false
  end
end

def completelyDisagree?(bool)
  if(bool===true)
    return false
  else
    return true
  end
end

### Begin Function Calls
puts hasCheezburger?(true)
puts isGreaterThanFive?(7)
puts completelyDisagree?(true)
### End Function Calls

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
