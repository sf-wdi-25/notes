
## Array Traversals and Actions ##

Let's get back to arrays.

We've already seen that we can traverse an array of elements with a simple for-loop. Then we learned about `forEach` and used that instead to iterate over arrays. Let's quickly review `forEach`.

### array.forEach() ###

To loop through an array with the ability to alter each element, similar to a for-loop traversal , JavaScript gives us an Array method `forEach()`

**forEach function skeleton**:

```javascript
var fruits = ["Apple", "Banana", "Cherry", "Durian", "Elderberry",
"Fig", "Guava", "Huckleberry", "Ice plant", "Jackfruit"];

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

Often we want to do more than just perform an action, like console.log(), on every loop.  When we actually want to modify/manipulate our array, map is our best friend!

Example - double every number in an array

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
With the `filter()` method you can create a *second* array filled with elements that pass certain criteria that you designate.  This is great for creating a sub array of fruits that start with vowels, a list of even numbers from a bigger list, and so on.  
  *It's important to remember that a filter method on an array requires a `boolean` return value for the callback function you pass as an argument.*

Fruity Example - Return a list of fruit that start with vowels:  

```javascript
var vowels = ["A", "E", "I", "O", "U"];
function vowelFruit(fruit) {
  var result = vowels.indexOf(fruit[0]) >= 0; // indexOf returns -1 if not found
  console.log("result for " + fruit + " is " + result);
  return result;
}
var vowelFruits = fruits.filter(vowelFruit);
// ["Apple", "Elderberry", "Ice plant"]
```

Or alternatively:

```javascript
var vowels = ["A", "E", "I", "O", "U"];

var vowelFruits = fruits.filter(function vowelFruit(fruit) {
  return vowels.indexOf(fruit[0]) >= 0; // indexOf returns -1 if not found
});
// ["Apple", "Elderberry", "Ice plant"]

```

Numbers Example - Find all even numbers within an array that are greater than 5:  

```javascript
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

even = numbers.filter(function filterEvens(num) {
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
avgLen = fruits.reduce(function concatFirstLetter(current, next, index) {
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

sum = numbers.reduce(function add(current, next) {
  return current + next;
});
// sum is 55

```

[Here is a link to the Mozilla Developer Network page on Javascript Arrays and prototype methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### exercises ###

Before we move on let's do the `map`, `reduce` and `filter` exercises.
**Challenge Set A 1-3**


# Iterators #

Let's go back to forEach and think about how it works.
What's happening internally?

* What are our inputs?
* What is our output?
* What happens on each loop?
* What does the callback function do?
* What gets passed into our callback function? i.e. what arguments?
  * Where does it come from?
  * How do we know what to name it?

Let's check:

```javascript
[0,100,200,300].forEach(function printer(element, index, array) {
  console.log(element, index, array);
});
```

Now we're going to build our own.

###Exercises:

Go take a look at the challenges in [exercise b](/exercises_b.md)



## Writing our own ##

Let's go back to forEach one more time and review.
What's happening internally?

* What are our inputs?
* What is our output?
* What happens on each loop?
* What does the callback function do?
* What gets passed into our callback function? i.e. what arguments?
  * Where does it come from?
  * How do we know what to name it?


**The Challenge**

We are going to implement our own iterators, from scratch.

For the following challenges it is essential that you understand the requirements to fully implement the built-in array method. See [MDN Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Remember to start small and add features later. It's easier to build incrementally than to try to do everything all at once.

* Create a function `myEach` which implements `Array.prototype.each`
* Create a function `myMap` which implements `Array.prototype.map`
* Create a function `myReduce` which implements `Array.prototype.reduce`

BONUS:

* Create a function `myFilter` which implements `Array.prototype.filter`
* Create a function `mySome` which implements `Array.prototype.some`
* Create a function `myEvery` which implements `Array.prototype.every`
