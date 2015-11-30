# Week 1 Drills

 
### Day 1: Object Oriented Drills
We will need some practice creating and implementing JavaScript objects after that long vacation! 

1.  Create the following objects with the listed attributes in a single JavaScript file labeled `GAStudents.js`. Make sure the objects accept parameters for each attribute. 

 Object:  `Student`
 -  First Name
 -  Last Initial
 -  GitHub username
 
 Object:  `Instructor`
 -  First Name
 -  Last Initial
 -  GitHub username
 
 Object:  `DIR`
 -  First Name
 -  Last Initial
 -  GitHub username
   
 Object: `Cohort`
 - An array of Students
 - An array of Instructors
 - An awesome DIR
 - Cohort number
 - Classroom number
 - GitHub repository

 Once you have created the three objects share your code with your neighbors and reach a consensus.

2.  Create the following object prototype methods for each specific object:

 Methods for `Student`:
 - `introduceYourself()` - **Display** to the console a simple greeting
      - "Hello, I am `<First Name>` and I am a student in Cohort `<Cohort number>`"
 - `studentToHTML()` - **Return** an HTML string with the following format: 
      - `Student:  <First Name> <Last Initial> @ <Github Username> ( Cohort <Cohort Number>)`
 
 Methods for `Instructor`:
 - `introduceYourself()` - **Display** to the console a simple greeting
      - "Hello, I am `<First Name>` and I am an instructor in Cohort `<Cohort number>`"
 - `instructorToHTML()` - **Return** an HTML string with the following format: 
      - `Instructor: <First Name> <Last Initial> @ <Github Username> ( Cohort <Cohort Number>)`
  
 Methods for `DIR`:
 - `introduceYourself()` - **Display** to the console a simple greeting
      - "Hello, I am `<First Name>` and I am a DIR in Cohort `<Cohort number>`"
 - `DIRToHTML()` - **Return** an HTML string with the following format: 
      - `DIR: <First Name> <Last Initial> @ <Github Username> ( Cohort <Cohort Number>)`
 
 Methods for `Cohort`:
 
 - `addStudent(student)` - Add a Student to the Student array within the Cohort object.  
 - `removeStudent(student)` - Remove a Student from the Student array within the Cohort Object.  **Return** the removed Student.
 - `showStudents()` - **Display** a simple list of all Student objects within the Cohort object.
 	 - Expected Output per Student object: `<index number>.  <First Name> <Last Initial>`
 
 - `addInstructor(Instructor)` - Add a Instructor to the Instructor array within the Cohort object.  
 - `removeInstructor(Instructor)` - Remove a Instructor from the Instructor array within the Cohort Object.  **Return** the removed Instructor.
 
 - `addDIR(DIR)` - Add a DIR to the Cohort object.  
 - `removeDIR(DIR)` - Remove a DIR from the Cohort Object.  **Return** the removed DIR.  
 
 - `buildCohortList()` - Create and return an HTML string consisting of the full list of the Instructors, the DIR, and the students.  The String should be an unordered list (`<ul>`) and each individual should be a list item (`<li>`). You may include any desired custom HTML to make the list awesome and exciting.

**Challenges**  

3.  This code drill is NOT DRY (Don't repeat yourself.) Refactor the code to have only two kinds of objects, a person and a cohort.  This will require an extra attribute within the person object that you can decide on.

4.  Display the list on a website.  You may use the <a href = "https://github.com/sf-wdi-25/blank_template">blank_template repository </a> to get things started.

<!--
### Day 2: Topic
### Day 3: Topic
### Day 4: Topic
 -->
