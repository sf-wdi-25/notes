## Challenge set B: function building ##

Work together in groups of 3 to solve the following:

DO NOT USE ANY BUILT IN ITERATOR METHODS: `forEach`, `map`, `reduce`, etc.

Be sure to verify that your functions are working before moving on to the next step.  Each of these is designed to build on your results from the previous ones.

**Warm Up Challenges:**

* Create a function `hereYaGo`.
    *  Input: an array.
    *  Output: the same array.
    ```
        someArray === hereYaGo(someArray);  // this should be true
    ```
* Create a function `first`.
    * Input: an array.
    * Output: the first item in that array.
    ```
        first(["apple", "toast", "cheese"]);
        // "apple"
    ```
* Create a function `last`.
    * Input: an array.
    * Output: the last item in that array.
    ```
        last(["apple", "toast", "cheese"]);
        // "cheese"
    ```
* Create a function `printEach`:
    * Input: an array.
        * On each iteration, print the item to the console.
    * Output: undefined;
* Modify the above to become `printEachPlus`:
    * Input: an array and a function.  Use `function(){return "!"}` as the function.
        * On each iteration, print the item to the console concatenated with the output of the callback function.
    * Output: undefined;
    ```
        // example of printEachPlus definition
        function printEachPlus(arr, callback) {
          // your code here
        }
        // example of calling printEachPlus
        printEachPlus(["apple", "toast", "cheese"], function(){
            return "!"
        });
        // "apple!"
        // "toast!"
        // "cheese!"
    ```
* Modify the above to become `printEachSuperPlus`:
    * Input: an array and a function.  When calling use the function: `function(v){return v + "!"}`
        * On each iteration, print the output of calling the callback function with the current item **as an argument** to the callback function.
    * Output: undefined;
    ```
        printEachSuperPlus(["apple", "toast", "cheese"], function(item){
            return item + "!"
        });
        // "apple!"
        // "toast!"
        // "cheese!"
    ```
