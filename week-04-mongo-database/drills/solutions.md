# Week 4 Drill - Solutions

###Day 1:  Binary Search
Serial Version:

```javascript

function binarySearch(searchArray, searchElement) {
  var min = 0;
  var max = searchArray.length - 1;
  var mid;
  var currentElement;

  while (min <= max) {
    mid = (min + max) / 2 | 0;
    currentElement = searchArray[mid];

    if (currentElement < searchElement) {
        min = mid + 1;
    }
    else if (currentElement > searchElement) {
        max = mid - 1;
    }
    else {
        return mid;
    }
  }

  return -1;
}


```

Recursive Version:

```javascript

function binarySearchR(searchArray, searchElement, min, max) {
  if (max < min) { return null; }
 
  var mid = Math.floor((min + max) / 2);
 
  if (searchArray[mid] > searchElement) {
    return binarySearchR(searchArray, searchElement, min, mid - 1);
  }
  
  if (searchArray[mid] < searchElement) {
    return binarySearchR(searchArray, searchElement, mid + 1, max);
  }
  return mid;
}
```

### Day 2: Bubble Sort

```javascript
function bubbleSort(array) {
  var end = array.length - 1;
  // create a swapped switch (true/false)
  var swapped = true;
  // while our switch is 'true'
  while(swapped){
    //console.log(array);
    // flip the swapped switch to false
    swapped = false;
    for(var i = 0; i < end; ++i) {
      // If an element is greater than its neighbor
      if (array[i] > array[i+1]) {
        // swap the element and its neighbor
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        // flip the switch to true
        swapped = true;
      }
    }
    end--;
  }
};

```

<!--
### Day 2: Topic
### Day 3: Topic
### Day 4: Topic
 -->
