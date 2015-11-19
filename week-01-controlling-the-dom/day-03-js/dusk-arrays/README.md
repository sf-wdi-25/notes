#Array Methods#

|Learning Objectives|
| :--- |
| Master the in & outs of Arrays  |
| Leverage iterators beyond `for` loops|
| Compare and contrast JavaScript's iterators |



##Array Method Basics##

```javascript
var fruits = ["Apple", "Banana", "Cherry", "Durian", "Elderberry",
"Fig", "Guava", "Huckleberry", "Ice plant", "Jackfruit"];
```

Accessing the **first** element:  

```javascript
fruits[0]; // "Apple"
```

Accessing the **length**:

```javascript
fruits.length; // 10
```
Accessing the **last** element:  

```javascript
fruits[fruits.length-1]; // "Jackfruit
```
**Adding** an element to the **front**:

```javascript
fruits.unshift("Apricot"); // 11
```

**Adding** an element to the **end**:  

```javascript
fruits.push("Kiwi"); // 12
```

**Removing** an element from the **front**:

```javascript
fruits.shift(); // "Apricot"
```

**Removing** an element from the **end**:  

```javascript
fruits.pop(); // "Kiwi"
```
**Finding** the index of an element:  

```javascript
fruits.indexOf("Jackfruit"); // 9
fruits[9]; // "Jackfruit"
```

**Removing** an element by index position:  

```javascript
var huckleBerryPos = fruits.indexOf("HuckleBerry");
var removedItem = fruits.splice(huckleBerryPos, 1);
// ["Apple", "Banana", "Cherry", "Durian", "Elderberry", "Fig", "Guava", "Ice plant", "Jackfruit"];
```

![img](http://www.frusion.com/media/1011/fruit-row.png)


## Basic array traversal with for ##

By now you've all used `for` to iterate over your arrays.  

```js
var fruits = ["Apple", "Banana", "Cherry", "Durian", "Elderberry",
"Fig", "Guava", "Huckleberry", "Ice plant", "Jackfruit"];

for (var i=0; i<fruits.length; i++) {
  console.log("eating a", fruits[i]);
}

```
Quick Exercise:

**head over to the exercises**



## passing functions to other functions ##

When we call a function we usually pass some arguments to it.  For example here, we're passing a string `Strawberry` to the indexOf function.

```js
fruits.indexOf("Strawberry");
```
We can do this with our own functions as well.

```js
function makeSandwich(meat, cheese) {
  return "bread, " + meat + ", " + cheese + ", bread"
}

// call makeSandwich and pass arguments to it
makeSandwich("turkey", "provolone");  // => bread, turkey, provolone, bread
```


Arguments can also be variables.

```javascript
var favoriteMeat = "ham";
makeSandwich(favoriteMeat, "colby");  // call makeSandwich with ham and colby
```

We can pass other types of arguments too, including arrays and objects.

```js
function makeBigSandwich(toppingsArray) {
  return "bread," + toppingsArray.toString() + "&bread";
}

makeBigSandwich(['ham', 'salami', 'provolone']);
// "bread,ham,salami,provolone,bread"
```

Finally we can also pass functions as arguments.  When they are passed in as an argument, they can be called within the function at whim.  

First let's look at a function that uses another function.

```javascript
function add(a, b) {
  var result = a + b;
  console.log(result);
}
```

Now let's make this function a little more flexible.  We'll remove `console.log` and pass in a function to call instead.

```javascript
function add(a, b, printer) {
  var result = a + b;
  printer(result);  // use the printer function to print out the result
}

function toConsole(input) {
  console.log(input);
}

// then calling it:
add(2, 2, toConsole); // => console logs 4
```
We can also use a different function as the **printer**.  This gives us a lot of flexibility.

```javascript
function toAlert(input) {
  alert(input);
}

// then calling it:
add(8, 9, toAlert); // => alerts 17
```

Finally a common way to write this is to define the **printer** function **in-line** with the function call.

```javascript

// then calling it (in-line):
add(8, 9, function toAlert(input) {
  alert(input);
}); // => still alerts logs 17
```

Let's have another example, a more delicious example:

```javascript

function eatSandwich(topping1, topping2, topping3, sandwichMaker) {
    console.log("I'm going to make and eat a sandwich with: " + topping1 + ', ' + topping2 + ' and ' + topping3);
    var layers = [topping1, topping2, topping3];
    var sandwich = sandwichMaker(layers);
    console.log("Finished eating my " + sandwich + " sandwich!");
}

function makeBigSandwich(toppingsArray) {
  return "bread," + toppingsArray.toString() + "&bread";
}

// then to call the function:
eatSandwich('bacon', 'lettuce', 'tomato', makeBigSandwich);
```

We passed the `makeBigSandwich` function to the `eatSandwich` function as an argument.  `eatSandwich` calls `makeBigSandwich`.

And now we'll re-write this with the function definition in-line with the function call.

```javascript

// eatSandwich stays the same
var eatSandwich = function(topping1, topping2, topping3, sandwichMaker) {
    console.log("I'm going to make and eat a sandwich with: " + topping1 + ', ' + topping2 + ' and ' + topping3);
    var layers = [topping1, topping2, topping3];
    var sandwich = sandwichMaker(layers);
    console.log("Finished eating my " + sandwich + " sandwich!");
}

// then to call the function:
eatSandwich('bacon', 'lettuce', 'tomato', function makeBigSandwich(toppingsArray) {
  return "bread," + toppingsArray.toString() + "&bread";
});
```

## Array Traversals and Actions ##

Let's get back to arrays.

As we've seen we can traverse an array of elements with a simple for-loop, but this *really* isn't the best approach to accessing and changing a list in Javascript.

As per usual, Javascript has provided us with quite a few powerful built-in methods that make accessing elements in an array a relative breeze.

*We will no longer be using the traditional for-loop structure to access and work with the elements within an array.  Adios!*


### array.forEach() ###

To loop through an array with the ability to alter each element, similar to a for-loop traversal , JavaScript gives us an Array method `forEach()`

**forEach function skeleton**:

```javascript
array.forEach(function callBack(element, index) {
    console.log(index + ". " + element);
});
```

Fruity Example - Make a numbered list

```javascript
fruits.forEach(function(element, index) {
  console.log(index + ". " + element);
});
/*  0. Apple
  1. Banana
  2. Cherry
  3. Durian
  4. Elderberry
  5. Fig
  6. Guava
  7. Huckleberry
  8. Ice plant
  9. Jackfruit
*/
```

###array.map()###
Similar to `forEach()`, `map()` traverses an array; this method, however, performs whatever callback function you pass into it as an argument on each element.

```JavaScript
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles is now [2, 8, 18]. numbers is still [1, 4, 9]
```

Fruity Example - pluralize all of our fruits  

```javascript
fruits = fruits.map(function(element) {

  // if word ends in 'y', remove 'y' and add 'ies' to the end
    var lastLetter = element[element.length -1];
     if (lastLetter === 'y') {
      element = element.slice(0,element.length-1) + 'ie';
  }

    return element + 's';
});
// [ "Apples", "Bananas", "Cherries", "Durians", "Elderberries",
//   "Figs", "Guavas", "Huckleberries", "Ice plants", "Jackfruits"  ]
```

Numbers Example - Square each number in an array

```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.map(function(element) {
  return Math.pow(element, 2);
});
// [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```


###array.filter()###
With the `filter()` method you can create a *second* array filled with elements that pass certain criteria that you desginate.  This is great for creating a sub array of fruits that start with vowels, a list of even numbers from a bigger list, and so on.  
  *It's important to remember that a filter method on an array needs a `boolean` return value for the callback function you pass as an argument.*  

Fruity Example - Return a list of fruit that start with vowels:  

```javascript
var vowels = ["A", "E", "I", "O", "U"];
function vowelFruit(fruit) {
  return vowels.indexOf(fruit[0]) >= 0;
}
var vowelFruits = fruits.filter(vowelFruit);
// ["Apple", "Elderberry", "Ice plant"]

```
Numbers Example - Find all even numbers within an array greater than 5:  

```javascript
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

even = numbers.filter(function(num) {
  var isEven = num%2==0;
    var greaterThanFive = num > 5;
    return isEven && greaterThanFive;
});
// [6, 8, 10]

```

###array.reduce()###
The `reduce()` method is designed to create one single object that is the result of an action performed among all elements in an array.  It essentially 'reduces' the values of an array into one single element.

Fruity Example - Return the first letter of every word in fruits concatentated into one single string:  

```javascript
avgLen = fruits.reduce(function(current, next, index) {
    if (index == 1) {
      current = current[0];
    }
  return current + next[0];
});
// "ABCDEFGHIJ"

```
Numbers Example - Find the sum of all of the numbers in an array:

```javascript
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sum = numbers.reduce(function(current, next) {
  return current + next;
});
// sum is 55

```



[Here is a link to the Mozilla Developer Network page on Javascript Arrays and prototype methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)