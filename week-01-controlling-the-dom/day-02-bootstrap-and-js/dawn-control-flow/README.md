# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Intro Control Flow

| Objectives |
| :---- |
|   Identify and discuss boolean operators and truthyness |
|   Apply logical operators and comparators to structure control flow |
|   Discuss and apply iterating and looping patterns |

"Control flow" refers to the way our computers move through a program's code. Understanding control flow allows us to trace the flow of a program based on its code. This skill is essential for programming in every language and paradigm. In particular, **conditionals** and **loops** are fundamental to understanding modern programming languages.

##Boolean Logic

At the very lowest level, computers understand our instructions as sequences of 1s and 0s. This "binary code" drives everything a computer does, from outputting text in the terminal, to displaying complex video game graphics, to communicating with other computers across the Internet.

Boolean logic is the closest web developers need to get to thinking about binary code. In boolean logic, every value is either true or false.

``` javascript
typeof(true); // "boolean"
typeof(false); // "boolean"
```

We can combine true and false statements to make larger assertions.

To do so, we need to use some "logical operators":

| English | "and" | "or" | "not" (aka "bang") | "not not" (aka "double bang") |
| ------------- |:-------------|:-------------|:-------------| :------- |
| Javascript | `&&` | &#124;&#124; | `!` | `!!` | |
| e.g. | `a && b` | a  &#124;&#124; b | `!b` | `!!b` |
| English | A and B | A or B | not B | not NOT B |

Each example above will evaluate to either `true` or `false`.

**Truth Tables**

It turns out that AND (`&&`) and OR (`||`) have some interesting properties. To illustrate this let's consider the following truth tables:

AND is only `true` if *both* statements are true:

``` javascript
hasName && hasQuest; // true or false
```

| AND `&&` | **true** | **false** |
| ------------- |:-------------|:-------------|
| **true** | `true` | `false` |
| **false** | `false` | `false` |


OR is only `false` if *both* statements are false:


``` javascript
hasCoconuts || hasQuest; // true or false
```

| OR &#124;&#124; | **true** | **false** |
| ------------- |:-------------|:-------------|
| **true** | `true` | `true` |
| **false** | `true` | `false` |

The last example is really interesting because it has the following effect: given a proposition like `hasCoconuts || hasQuest`, if `hasCoconuts` evaluates to true, we're done! We can "short circuit" the rest of the statement!

In other words --> we have the basis for **control flow**.

The last example tends to be the hardest to comprehend, and the most useful to learn!


**Negation**

When we introduce the concept of negation into the mix, we can make some cool proofs. For instance, De Morgan's Law coverts between AND and OR statements:

``` javascript
!(a && b) === !a || !b // these are the same!

!(a || b) === !a && !b // these are too!
```

Exercise: No shirt, no shoes, no business! Using logical operators, create a statement which evaluates to `true` if I'm allowed in the business, and `false` if I'm not.

**Comparisons**

To make assertions we commonly use a logical "comparator":

| strict equality | loose equality | not equal | greater than | less than | greater than or equal to | less than or equal to |
| ------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|
| `===` | `==` | `!==` | `>` | `<` | `>=` | `<=` |

These can be combined to make longer assertions that evaluate to either `true` or `false`.

``` javascript
    a > 10 && a !== 11;
```

Beware loose equality!

* Strict equality (`===`) is the best practice!
* Here's why: [Javascript Equality Table](https://dorey.github.io/JavaScript-Equality-Table/)


## Conditionals
With a basic understanding of boolean logic and mathematical comparators we can introduce the idea of control flow or "branching" logic.

![](http://cdn.thebolditalic.com/paperclip/html_images/35108/images/original/will-you-be-late_final.png) [source](http://www.thebolditalic.com/articles/5398-your-sf-transportation-problems-in-one-flowchart)

#### `if/else`

The boolean expression inside an `if`'s parentheses will always be evaluated as truthy or falsy to determine what will happen next. 

A die hard Giants fan might have the following rules for baseball games.

```js
if (giantsPlaying) {
  getTickets();
}

if (!giantsPlaying) {
  watchOnTV();
}
```

We can rephrase this more succinctly using `if` and `else`.

```js
if (giantsPlaying) {
  getTickets();
} else {
  watchOnTV();
}
```

A slightly more complex boolean expression will help our Giants fan save some money.

```js 
if (giantsPlaying && gameInSF){
  getTickets();
} else {
  watchOnTV();
}
```

Some languages allow us to write if/else expressions in even fewer lines with a "ternary operator". Which is generally frowned upon because it is as easy to read as a James Joyce novel.

```js
giantsPlaying && gameInSF ? getTickets() : watchOnTV;
```

#### `else if`

Here's a sample rule set for commuters:

```js
var destination = "GA";
if ( hasBike ) {
  rideToGA();
} else if ( hasTransitPass ) {
  busToGA();
} else {
  walkToGA();
}
```


#### Nested `if`s

A strategy for choosing what to drink:

```js
var drink;

if (tooSleepy) {
  if (before5pm) {
    drink = "coffee";
  } else {
    drink = "black tea";
  }
} else {
  if (isHungry){
    drink = "smoothie";
  } else {  
    drink = "water";
  }
}
```

**Best Practices:**

* Indentation: Every time you open a curly brace, start a new line, and tab in one level of indentation.
* Nesting: Keep it flat! Avoid deeply nested conditionals.


## Conditional Control Flow Tricks

**Loose Control Flow** (watch out for edge cases!)

```js
if ( username ) {
  // submit signup form
}

// same as

if ( username.length > 0) {
  // submit signup form
}
```

**Ternary operator**

Fancy and compact, but not always the easiest to read.

```js
var username = ( last_name ? first_name + last_name : first_name );

// same as

var username = first_name;
if ( last_name ) {
  username = first_name + last_name;
}
```

Best Practice: surround ternary expressions in parantheses.

**Conditional assignment: `||` as Default Operator**

```js
var bestCity = yourCity || "San Francisco";

// same as

var bestCity = "San Francisco";
if ( yourCity ) {
  bestCity = yourCity;
}

```

**Conditional Execution: `&&` as Guard Operator**

```js
badThing && alert("Uh oh!")

// same as

if ( badThing ) {
  alert("Uh oh!");
}

```

## Loops

Whenever we want to repeat something in code, we use a loop.  We can think of every loop as three parts: initial setup, continue condition, and update expression(s).


#### `while` loops

![Endless Doughnuts](http://img.pandawhale.com/78624-Homer-Simpson-infinite-donuts-P3EQ.gif)

__While doughnut, eat doughnut!__

In while loops, the initial setup happens before the loop. The continue condition goes inside the parentheses. The update expressions happen inside the loop. 

```js
var minutesBeforeWork = 80;                    // setup:  plan to wake up early
while (minutesBeforeWork > 30) {               // continue condition: leave enough time to get day clothes on
  minutesBeforeWork = minutesBeforeWork - 5;   // update: hit snooze!
}
```

#### `for` loops

For loops allow the setup, continue condition, and update expression inside the for loop parentheses. 

```js
for (var count = 1; count <= 3; count++){
  console.log(count);
}
console.log("Go Team!");
```

For loops for arrays usually use a counter variable to move through the indices of the array.

```js
var friends = ["Bill", "Nicki", "Kelly"]
for (var i = 0; i < m.length; i++) {
  console.log(m[i] + " is a nice person");
}

```


#### `break`

The key word `break` will break us out of a loop immediately.  When you experiment more with loops inside functions, you'll see that `return`ing from inside a loop (inside a function) also immediately breaks the loop.

```js
for (var i = 0; i < 10; i+=2) {
  console.log(i);
  break;
}

var j=0;
while (j < 10) {
  console.log(j);
  break;
  j += 2;
}
```



##Truthiness and Bool*ish* Values

So far we've seen that we can use the primitives `true` and `false` directly in our code to influence control flow.

We've also seen that we can make statements and assertions that evaluate to either `true` or `false`:

* `hasQuest;`
* `weatherToday === "rainy";`
* `age >= 21 || hasImpressiveMoustache;`

In every case we get back a boolean: `true` or `false`;

The truth value of `true` is `true`.

The truth value of `false` is `false`.

But, what is the truth value of:

    * "abc";
    * "";
    * -1;
    * 0;
    * 3.14159;

Do these things even *have* a truth value?

It turns out they do!

**Truthy / Falsy**

We can informally describe data as being "truthy" or "falsy".

``` javascript
var test_case = "abc"; // test 'em all!
if ( test_case ) {
    console.log(test_case + " is truthy!")
} else {
    console.log(test_case + " is falsy!")
}

```

Wowa! What's going on here?

Is "abc" true?

``` javascript
"abc" === true; // ?
```

Can we coerce "abc" (a String) into becoming a Boolean somehow? Suppose we *negate* our value (with a "bang", `!`):

``` javascript
!"abc"; // ?
```

Suppose we *double* negate it:


``` javascript
!!"abc"; // ?
```

What data type did we start with? What did we end with?

HINT: use `typeof(startValue)` and then `typeof(endValue)`

In your own words, describe what's going on here:

* What effect does the bang have? And the double bang?
* What is type coercion? What does it mean to "coerce" a data type?
* Which values are "truthy"? Can you find more examples?
* Which values are "falsy"? Can you list them all?
* Is there any kind of logic to it?

More info on truthy / falsy / equality: [Javascript Equality Table](https://dorey.github.io/)

## Exercises

[YAY! Exercises to practice](exercises.md)

## Resources

* [Loops - JSforcats](http://jsforcats.com/#loops)
* [Conditionals - Codeacademy](http://www.codecademy.com/glossary/javascript/if-statement)
* [Loops - CodeAcademy](http://www.codecademy.com/glossary/javascript/loops)
