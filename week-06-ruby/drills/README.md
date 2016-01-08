# Week 6 Drills


### Day 2: Regex Lab!
Test your Regex mettle with [this](https://github.com/sf-wdi-25/regex-craigslist-app) fun Craigslist puppy scraper!  (It's much more fun than it sounds)


### Day 3: Ruby Merge!
You thought you were done with mergesort?! **NO!** Algorithms are our friends! Clone  [this](https://github.com/sf-wdi-25/rubyMerge) repository and let us merge in Ruby!  (Again, it's much more fun than it sounds)


### Day 4: Ruby Bubble Sort!
A never ending parade of wonderful algorithms are coming your way!

![Geese on parade!](http://gifslol.com/images/2014/June/9/5395b00d27a40.gif)  

Clone [this](https://github.com/sf-wdi-21/bubble_sort_ruby) repository and let us sort some bubbles!  (This is the most fun you'll ever have this morning!)


### Day 5: Binary Search Testing in Ruby!
You've been writing plenty of sorting algorithms in Ruby to satisfy some pretty wacky tests.  This time it is YOUR turn to write your own! Using the file structure and patterns of a standard RSPEC testing suite (like the above bubble sort repo), make your own set of tests.  Test for the presence of an element, the lack of presence of an element, and up to three edge cases that you can think of.  This is your opportunity to shine!  Use this [testing frame repository ](https://github.com/sf-wdi-25/binary_search_tester/tree/master) to try out your testing skills.

The binary search algorithm begins by comparing the target value to the value of the middle element of the sorted array. If the target value is equal to the middle element's value, then the position is returned and the search is finished. If the target value is less than the middle element's value, then the search continues on the lower half of the array; or if the target value is greater than the middle element's value, then the search continues on the upper half of the array. This process continues, eliminating half of the elements, and comparing the target value to the value of the middle element of the remaining elements - until the target value is either found (and its associated element position is returned), or until the entire array has been searched (and "not found" is returned). Source Wikipedia

Searching for a name in a telephone book using binary search - https://study.cs50.net/binary_search (an awesome introduction to binary search).

One solution to use for testing:

```ruby

def binary_search(searchArray, searchElement)
  min = 0
  max = searchArray.length - 1

  while (min <= max)
    mid = (min + max) / 2 | 0
    currentElement = searchArray[mid]

    if (currentElement < searchElement)
        min = mid + 1
    elsif (currentElement > searchElement)
        max = mid - 1
    else
        return mid
    end
  end

  return -1
end

```
