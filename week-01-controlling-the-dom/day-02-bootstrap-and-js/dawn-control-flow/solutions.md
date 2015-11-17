#Solutions - Control Flow

### Boolean Expressions and Truthy Values

1. What is the outcome of the following expressions?

```js
  * true || false     // true
  * false && false  // false
  * true && false // false
  * (false || true) && true // true
  * false && ((true || false) && (false || true)) // false (note you can tell from just the first `false &&`
```


1. Which of the following are truthy values? (hint: try `if("abc"){"console.log('I'm truthy!')"}` in the JS console).
  truthy: `1, "abc", [], {}, 3.14159, Array, Object`
  falsy: `"", 0`

1. List all the falsy values in Javascript

* `false`
* `undefined`
* `null`
* `0`
* `NaN` ("Not a Number")
* `""` (empty string)
* Everything else is truthy!


### Login
Good:
``` javascript
if (password & username) {
    console.log("All good")
} else if ( username === "" ) {
    console.log("Missing Username")
} else if ( password.length === 0 ) {
    console.log("Missing Password")
}
```

Also Good:
``` javascript
if (password & username) {
    console.log("All good")
} else if ( !username ) {
    console.log("Missing Username")
} else {
    console.log("Missing Password")
}
```

### Superman?
``` javascript
if (isBirdlike && !hasFeathers || isPlanelike && !isMadeOfMetal) {
    console.log("It's Superman!");
}
```



#### Make it a SloppyBurger.
Okay:
``` javascript
var whatISaid = ""; // or "DoubleBurger", or "Burger", etc.
var order = "One Sloppy";
if (whatISaid) {
    order = order + whatISaid;
} else {
    order = order + "Burger"
}
console.log(order);
```

Better:
``` javascript
var whatISaid = ""; // or "DoubleBurger", or "Burger", etc.
console.log( "One Sloppy" + whatISaid || "Burger" );
```



#### For Here?
``` javascript

var isHotBeverage = false;
var isHotBakedGood = false;
var isColdPreparedFood = false;
var forHere = true;

var total = 100;

if ( forHere || !isHotBeverage || !isHotBakedGood || !isColdPreparedFood) {
    total = total + (total*0.0775)
}
console.log( total )
```



#### Can I ride?
Jimmy loves roller coasters, but there are a bunch of rules (ugh!) for riding. For starters, it costs 5 tokens. Check the following additional Requirements:

1. Must be at least 4ft tall.

  ```js
  var tokens = 3; // Jimmy's tokens
  var height; // Jimmy's height in feet

  // Can he ride?
  if ( tokens >= 5 && height >= 4) {
      console.log("Step right up!");
  } else {
      console.log("Sorry, you can't ride.");
  }
  ```

1. Must be at least 12 years old.

  ```js
  var tokens = 3; // Jimmy's tokens
  var height; // Jimmy's height in feet
  var age; // Jimmy's age in years

  // Can he ride?
  if ( tokens >= 5 && height >= 4 && age >=12) {
      console.log("Step right up!");
  } else {
      console.log("Sorry, you can't ride.");
  }
  ```

1. Replace the previous rule: now riders under 12 must be accompanied by an adult.

  ```js
  var tokens = 3; // Jimmy's tokens
  var height;   // Jimmy's height in feet
  var age;    // Jimmy's age in years
  var hasAdult;   // bool - does Jimmy have an adult?

  // Can he ride?
  if ( tokens >= 5 && height >= 4 ) {
    if (age >= 12 || hasAdult){
        console.log("Step right up!");
    } else {
      console.log("Sorry, you can't ride.");
    }
  } else {
      console.log("Sorry, you can't ride.");
  }
  ```

1. If the boss isn't looking, you can sneak in!

  ```js
  var tokens = 3; // Jimmy's tokens
  var height;   // Jimmy's height in feet
  var age;    // Jimmy's age in years
  var hasAdult;   // bool - does Jimmy have an adult?
  var isLooking;  // bool - is the boss looking?

  // Can he ride?
  if (!isLooking){
    console.log("Step right up!");
  } else {
    if ( tokens >= 5 && height >= 4 ) {
      if (age >= 12 || hasAdult){
          console.log("Step right up!");
      } else {
        console.log("Sorry, you can't ride.");
      }
    } else {
        console.log("Sorry, you can't ride.");
    }
  }
  ```

1.  Riders with a park pass get in free.

  ```js
  var tokens = 3; // Jimmy's tokens
  var height;   // Jimmy's height in feet
  var age;    // Jimmy's age in years
  var hasAdult;   // bool - does Jimmy have an adult?
  var isLooking;  // bool - is the boss looking?
  var hasPass;  // bool - does Jimmy have a park pass?

  // Can he ride?
  if (!isLooking){
    console.log("Step right up!");
  } else {
    if ( (tokens >= 5 || hasPass) && height >= 4 ) {
      if (age >= 12 || hasAdult){
          console.log("Step right up!");
      } else {
        console.log("Sorry, you can't ride.");
      }
    } else {
        console.log("Sorry, you can't ride.");
    }
  }
  ```

More Advanced Solution:

``` javascript
var bossIsLooking = false;
var height = 48;
var tokens = 10;
var age = 11;
var accompanied = true;

if (!bossIsLooking) {
    console.log("Step Right Up!")
} else if (tokens > 5) {
    if (height >= 48) {
        if (age >= 12 || accompanied) {
            console.log("Step Right Up!")
            tokens = tokens - 5;
        } else {
            console.log("Sorry, too young!")
        }
    } else {
        console.log("Sorry, too short!")
    }
} else {
    console.log("Sorry, not enough tokens.")
}
```



### Bottles Of Beer

Good:
``` javascript
    
    for(var b=5; b>=0; b--){
        console.log(b + " bottles of beer on the wall,")
        console.log(b + " bottles of beer!")
        console.log("Take one down, pass it around")
        console.log(b-1 + " bottles of beer on the wall")
    }

```

Better:
``` javascript
    
    var bottles = 5;

    while(bottles--){
        console.log(bottles + " bottles of beer on the wall,")
        console.log(bottles + " bottles of beer!")
        console.log("Take one down, pass it around")
        if (bottles){
            console.log(bottles-1 + " bottles of beer on the wall")
        } else {
            console.log("No more bottles of beer on the wall!")
        }
    }

```

This works too...
``` javascript
    var bottles = "bottles"
    while (numBottles > 0){
        console.log(numBottles + " " + bottles + " of beer on the wall,");
        console.log(numBottles + " " +  bottles + " of beer");
        console.log("Take one down and pass it around,");
        numBottles = numBottles - 1;
        if (numBottles === 1){
            bottles = "bottle"
        }
        if (numBottles === 0){
            console.log("No more bottles of beer on the wall!");
        } else {
            console.log(numBottles + " " + bottles + " of beer on the wall!");
        }
    }
```
