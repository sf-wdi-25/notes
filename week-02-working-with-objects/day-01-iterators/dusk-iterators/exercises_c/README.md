# Building our own iterators


For the following challenges it is essential that you understand the requirements to fully implement the built-in array method. See [MDN Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Remember to start small and add features later. It's easier to build incrementally than to try to do everything all at once.

* Create a function `myEach` which implements `Array.prototype.each`
* Create a function `myMap` which implements `Array.prototype.map`
* Create a function `myReduce` which implements `Array.prototype.reduce`

Note: for `myReduce` it is suggested that you start by coding a solution to solve it without
`initialValue`.  See the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) for more details.


BONUS:

* Create a function `myFilter` which implements `Array.prototype.filter`
* Create a function `mySome` which implements `Array.prototype.some`
* Create a function `myEvery` which implements `Array.prototype.every`



## tests

Tests have been provided for you to test your solutions.  At this point don't
worry about the test code.  You don't even need to read it.  
Focus on building your solution and just use the tests as a system of hints and
a way to confirm your solutions.


### test setup

`cd` into the `exercises_c` directory.  Then run `npm install`.

### running tests

Run the tests individually as you work on each challenge.  For example to run
the tests for myMap, in your terminal:

```bash
mocha test/test-myMap.js
```

This will test against your solution in `myMap.js`.


#### Sample output:

The first portion of the output shows RED for all failing tests and GREEN for
successes.  Successful tests also show a ✓ (check-mark).  You can see we had 3
passing tests in the below output.  


```
$ mocha test/test-myMap.js


 myMap
   1) takes and calls a callback function
      results:  []
   2) passes each item in the array to the callback
      results:  []
   3) passes each index in the array to the callback
   ✓ passes the entire array to the callback
      results:  undefined
   4) returns an array
      results:  undefined
   5) returns an array with the same number of elements
      results:  undefined
   6) returns an array constructed from the return values of the callback
      results:  [ 'a', 'b', 'c', 'd' ]
   ✓ doesn't alter the original array
      results:  []
   ✓ works with arrays of length 0
      results:  []
   7) works with arrays of length 1
```

*Also it's important to note that the three passing tests above are actually passing
only by happenstance.  As soon as you implement a little more of the `myMap` function
they'll stop passing.  For example `doesn't alter the original array` is passing;
primarily because an empty function doesn't alter arrays, right?.*  You need to get
all the tests to pass.


Further on down you will see more detailed test failure messages.

```
7) myMap works with arrays of length 1:

  AssertionError: expected 0 to equal 1
  + expected - actual

  +1
  -0

  at Context.testArrayL1 (test/test-myMap.js:115:38)
```

An **assertion** is a statement that *asserts* or says this "MUST BE TRUE".  If
the statement turns out to be false, then the assertion fails and the test fails.  
Assertions are the real tests inside the tests.

In the above we can see that at line 115 in the tests it expected for `0` to equal `1`.

Here's another one:

```
2) myMap passes each item in the array to the callback:
   AssertionError: expected [] to have the same members as [ 'a', 'b', 'c', 'd' ]
    at Context.testEachItem (test/test-myMap.js:37:36)
```

*What do you think this means?*

At line 37 in the test file there was an expectation that an array would have the elements
`['a', 'b', 'c', 'd']`.  But instead it got an empty array.
