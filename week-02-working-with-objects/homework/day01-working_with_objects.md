#Object Oriented Programming

| Objectives |
| :--- |
| Build practical and useful objects using Javascript constructors |
| Demonstrate a working knowledge of  object properties and methods  |
| Convert previous projects to utilize Object Oriented Programming techniques |

## What is an Object?

As of today, we have been writing our Javascript code mainly using only functions, Strings, Integers, and Arrays.  These are all great accomplishments, but like everything else in the world of programming, there is always a more efficient way of implementing what we have done.

Here is a piece of JSON data we will been using for our gitHub user website drill.  Take some time to study the structure and the data types within the data object.

```javascript
var data = {
    "school": "General Assembly",
    "city": "San Francisco",
    "course": "Web Development Immersive",
    "course_id": "WDI25",
    "classroom": "8",
    "instructors": [
        {
            "id": 0,
            "last_name": "Nathan",
            "first_name": "Allen ",
            "github_username": "nathanallen"
        },
        {
            "id": 1,
            "last_name": "Travis",
            "first_name": "Gaff",
            "github_username": "tgaff"
        },
        {
            "id": 2,
            "last_name": "Justin",
            "first_name": "Castilla",
            "github_username": "justincastilla"
        }
    ]
}
```

-  Based on our experience in class so far and your familiarity with the above object, consider the following as you read further:
	- How many of the properties in `data` are Strings?
 	- How many of the properties are Arrays?
 	- If there is an array, what is the array data type?

The `data` object is a grouping of key & value pairs (known as properties) that describe our class, WDI25.  

```javascript
school: "General Assembly"
```
In the line above, `school` is the **key** and `"General Assembly"` is the **value**.

To access this property, we can use dot-notation or bracket-notation on the key to have the corresponding value returned.

 ```javascript
 var GA = data.school //General Assembly
 ```

`GA` has the value `General Assembly`.  

To access an array within an object,  the method is similar to accessing any other property.  The property `students` is an array of Objects.  To access that array and assign it to a variable, we simply perform the following:

 ```javascript
 var instructorArray = data.instructors //instructors
 ```
The `data.instructors` array is now accessible  by using `instructorArray` instead.
Declaring variables and defining them as portions of a larger object helps us create readable and followable code.  

*We can assume that an Object is a collection of properties (key & value pairs) that all have some sort of relationship and are connected logically to one another.*  

###Quick Challenge
- Make a copy of the data above and put it in a file called `enhancedData.js`
- Add some properties that logically fit into an object describing our class (address, floor number, and a list of students.
- Try to access your new data properties from the console to make sure they work.

If everything worked out, you should have a fully functioning data object, only now with even MORE properties for us to play with!

**Submit** the above as today's pull-request to the homework repository.  
