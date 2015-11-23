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
cd exercises_c
mocha test/test-myMap.js
```

This will test against your solution in `myMap.js`.
