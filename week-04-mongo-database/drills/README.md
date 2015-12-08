# Week 1 Drills

### Day 1: Binary Search
The binary search algorithm begins by comparing the target value to the value of the middle element of the sorted array. If the target value is equal to the middle element's value, then the position is returned and the search is finished. If the target value is less than the middle element's value, then the search continues on the lower half of the array (excluding middle element;) or if the target value is greater than the middle element's value, then the search continues on the upper half of the array. This process continues, eliminating half of the elements, and comparing the target value to the value of the middle element of the remaining elements - until the target value is either found (and its associated element position is returned), or until the entire array has been searched (and "not found" is returned). [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)

##D#ay 2: Bubble Sort

Pre-work: [First, some Hungarian ("Csángó") folk dance](https://www.youtube.com/watch?v=lyZQPjUT5B4)

Bubble sort is one of the first sorting algorithms you should try and master.  It essentially forces larger elements to 'sink' to the bottom/back while inadvertently 'floating' smaller elements to the top/front of a list.  This is done with numerous comparisons between one element in an array with its neighbor.  

###Sort the list using Bubble Sort: [5,4,2,3,1,6]

####Iteration 1
Look at the first two elements in the list.
	
0: [**5, 4**,2,3,1,6]  

Is 5 > 4 ? Yes! Swap!

If an element on the left (5) is greater than the element on the right (4), the two elements 'swap' locations

1: [4,**5,2**,3,1,6]  

2: [4,2,**5,3**,1,6]  

3: [4,2,3,**5,1**,6]  

4: [4,2,3,1,**5,6**]  


**Important:** We now know that the last element in the list is the largest element in the list. There's no need to do a comparison with that number ever again.


####Iteration 2

0: [**4,2**,3,1,5,~~6~~]

1:  [2,**4,3**,1,5,~~6~~]

2:  [2,3,**4,1**,5,~~6~~]

3:  [2,3,1,**4,5**,~~6~~]

Stop!

Remember: we know that last element is the largest number in the list.  There is no need to compare against that number ever again.  We also now know that the **second** to last number is the second largest number; no need to move that one ever again as well. (Detect a trend?)

###Iteration 3

0: [**2,3**,1,4,~~5,6~~]  

If an element on the left has met a larger or equal element, we look at its bigger neighbor and now compare the larger neighbor to it's neighbor on the right.  The process is continued until our established end.

1: [2,**3,1**,4,~~5,6~~]

2: [2,1,**3,4**,~~5,6~~]

Stop!

We don't stop sorting until we hit the end.  Even if we find 

###Iteration 4

0: [**2,1**,3,~~4,5,6~~]

1: [1,**2,3**,~~4,5,6~~]

Stop!

###Iteration 5
0: [**1,2**,~~3,4,5,6~~]

Stop!

When there is only one element (the first element) left in our unsorted list, it is already sorted for us as a freebie!

###List is now sorted using Bubble Sort: [1,2,3,4,5,6]

![](http://cdn2.crunchify.com/wp-content/uploads/2013/01/BubbleSort-Algorithm-Crunchify.jpg)

###Now write your own bubble sort!
####Hints:
If you want to swap two variables, a and b:

```javascript
var a, b, temp;
temp = a;
a = b;
b = temp;
```

You may use a conventional for loop.

### Day 3: Merge Sort

### Day 4: Outcomes
