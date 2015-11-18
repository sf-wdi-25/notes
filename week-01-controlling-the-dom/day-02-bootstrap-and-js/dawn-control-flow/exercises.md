# Exercises - Control Flow

- Work in your Chrome Developer Console.  
    * Pro-Tip: use the "up" arrow key to save yourself some typing: it will pull up previously entered code.
- Remember, you can also work in a file (like controlFlow.js) in Sublime Text to keep your code.  Run it from the terminal by typing `node controlFlow.js`, or copy and paste sections into the Chrome developer console.
- Please submit your answers using your fork of the homework repo.
- See [solutions.md](solutions.md) for solutions. No Peeking!


#### Boolean Expressions and Truthy Values - [solutions](solutions.md)

1. What is the outcome of the following expressions?

  * true || false
  * false && false
  * true && false
  * (false || true) && true
  * false && ((true || false) && (false || true))

1. Which of the following are truthy values? (hint: try `if("abc"){console.log("I'm truthy!")}` in the JS console)
  * 1
  * 0
  * 3.14159
  * "abc"
  * ""
  * Array
  * []
  * Object
  * {}

1. What is the outcome of the following expressions?
  *  true && 6
  *  0 || "hi"
  *  ["a","b","c"] || "123"
  *  {"key":"value"} || false

1. List all the falsy values in Javscript.

#### Login - [solution](solutions.md)
When a user trys to login to our website we want to check that they actually input a value for username and a value for password. If they typed both in, give them an "All Good". But if either the username or the password are missing, give them an error: "Missing Username" / "Missing Password".
* username // string
* password // string


#### Superman? - [solution](solutions.md)
We need a quick way to determine if that blip on the radar is superman or not. Sometimes it's just a bird. Sometimes it's just a plane. But we definitely want to know if its superman. Write some code which will alert: "It's superman!" when the following are true (it's up to you to decide what makes the most sense):
* isBirdlike // boolean
* isPlanelike // boolean
* hasFeathers // boolean
* isMadeOfMetal // boolean


#### Make it a SloppyBurger - [solution](solutions.md)
The lovely cashier at SloppyBurger will assume you want a SloppyBurger unless you say otherwise. Better speak up!

On the left is what you said when you ordered. The output, on the right, is what you actually got. Can you transform the input (the order) into the output?

| input | output |
|:--------------|:--------------|
| "" | "One SloppyBurger" |
"Burger" | "One SloppyBurger" |
"DoubleBurger" | "One SloppyDoubleBurger" |
"Fries" | "One SloppyFries" |
"SloppyJoe" | "One SloppySloppyJoe" |

Bonus: Can you do it without using "if"?



#### For Here - [solution](solutions.md)
Sales tax can be tricky for restaurants to calculate. For example, sales tax is not charged on hot beverages, hot bakery goods, and cold prepared foods when ordered "to go." Otherwise the sale is taxed 7.75%. Use the following variables, and write some tests to check for the correct total:
* isHotBeverage // boolean
* isHotBakedGood // boolean
* isColdPreparedFood // boolean
* forHere // boolean
* total // floating point number


#### Can I ride? - [solution](solutions.md)
Jimmy loves roller coasters, but there are a bunch of rules (ugh!) for riding:

For starters, it costs 5 tokens. Here's how we might code that:

```js
var tokens = 3; // Jimmy's tokens

// Can he ride?
if ( tokens >= 5 ) {
    console.log("Step right up!");
} else {
    console.log("Sorry, you can't ride")
}
```
Edit the code above to check the following additional Requirements:

1. Must be at least 4ft tall.
2. Must be at least 12 years old.
3. Replace the previous rule: now riders under 12 must be accompanied by an adult.
4. If the boss isn't looking, you can sneak in!
5. Riders with a park pass get in free.


#### Loopy - [solution](solutions.md)
* Create a loop which prints out:

    ```
    0
    1
    2
    3
    4
    5
    ```
* Create a loop which prints out:

    ```
    5
    4
    3
    2
    1
    0
    ```



#### Bottles Of Beer - [solution](solutions.md)
Create the "Bottles of beer on the wall" song (watch out for infinite loops!):
```
    5 bottles of beer on the wall,
    5 bottles of beer!
    Take one down and pass it around,
    4 bottles of beer on the wall...
    
    4 bottles of beer on the wall,
    4 bottles of beer!
    Take one down and pass it around,
    3 bottles of beer on the wall...
    etc.
```

* How would you change "0" to "No more"?
* How would you fix "1 bottles of beer"?
