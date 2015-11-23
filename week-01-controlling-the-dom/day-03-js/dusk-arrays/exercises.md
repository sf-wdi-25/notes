#Exercises - Array Manipulation

## Challenge Set A ##

### Challenge 1 ###

Use your chrome console `ctrl+opt+j` to perform the following activities.
Each of the following tasks can be accomplished using a single Array method in 1 line of code.

* create an array: `var cacti = ['barrel', 'columnar', 'hedgehog', 'cluster', 'prickly pear'];`
* print out the 3rd element (hedgehog)
* print out the length of the array
* print out (console.log) the last element (prickly pear).  Use a built-in array method.  (Do not use `cacti[4]`)
* put `epiphytic` on the end of the array
* Use indexOf to find the index of 'columnar' and print it out.
* remove 'barrel' (the first element) from the list
* add 'barrel' back to the **front** of the list
* remove the 4th element of the list (hint use splice)

### Challenge 2 ###

Use `for` to print out each fruit from the list.
```js
var fruits = ["Apple", "Banana", "Cherry", "Durian", "Elderberry",
"Fig", "Guava", "Huckleberry", "Ice plant", "Jackfruit"];
```

### Challenge 3 ###

Print the same list as above, in reverse order.



**stop here until we reach the next exercise**

## Challenge Set B ##

### Challenge 1a (forEach)###

```js
var dogs = ['Snoopy', 'Scooby', 'Pluto', 'Goofy', 'Astro', 'Mr. Peabody', 'Odie', "Santa's Little Helper", 'Brian'];
```

Use `forEach` to print each character in the list of famous cartoon dogs.


###Challenge 1b (forEach)###

Use `forEach` and `String.toUpperCase` method to convert the list of characters into all capitals.  That is, you should replace each character in the array with an all UPPERCASE version of that character's name.

Use `console.log(dogs)` to verify your solution has changed the `dogs` array.


###Challenge 1c (forEach)###

*Curry up now* has a line wrapped around the truck! It takes about two minutes per delicious curry burrito. Output the customer's name & their expected wait time.

```javascript
// warning the below is pseudo-code!
var customers:   Justin, Ilias, Nathan, Camilo, Vikash, Adam, Brianna, Sarah, Ali, Jessie, Cameron
customers.forEach(fn);


/* sample output:
   Justin: 2 minutes
   Ilias: 4 minutes
   Nathan: 6 minutes
   Camilo: 8 minutes
   Vikash: 10 minutes
   ...
   Cameron: 22 minutes
*/
```
