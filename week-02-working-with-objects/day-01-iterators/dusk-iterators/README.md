
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

Often we want to do more than just perform an action, like console.log(), on every loop. When we actually want to modify/manipulate our array, map is our best friend!


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
