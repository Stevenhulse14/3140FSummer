# Assignment 6: Student Grade Analyzer

## Course Project Overview

In this assignment series, you will create four interactive web projects using HTML, CSS, and JavaScript:

1. An Interactive Profile Card
2. A Student Grade Analyzer
3. A Product Catalog
4. A Mini Shopping Cart

Each assignment introduces new JavaScript concepts while reinforcing skills from previous assignments.

### General Requirements

For every assignment:

* Use this project structure:

```text
project-folder/
├── index.html
├── styles.css
├── script.js
└── README.md
```

* Use semantic HTML.
* Use an external CSS file.
* Use an external JavaScript file.
* Load JavaScript with `<script src="script.js" defer></script>`.
* Use descriptive variable and function names.
* Properly indent all code.
* Test the project in a browser.
* Use `console.log()` while developing.
* Remove unnecessary console messages before submitting.
* Include comments that identify major sections of JavaScript.
* Avoid placing all code inside one large function.
* Do not use inline JavaScript such as `onclick`.
* Complete the reflection questions.

---

## Project Description

Create a student grade analyzer that accepts several numerical grades and calculates information about the student’s performance.

The application must calculate:

* The average grade
* The highest grade
* The lowest grade
* The number of passing grades
* The number of failing grades
* A letter grade
* A final status message

This assignment introduces:

* Arrays
* Array indexes
* Loops
* Array methods
* Functions
* Parameters
* Return values
* Number conversion
* Conditional statements
* Calculations

## Learning Objectives

By completing this assignment, students will be able to:

* Store multiple values in an array.
* Access array values using indexes.
* Add values to an array.
* Loop through an array.
* Pass an array into a function.
* Return calculated information.
* Calculate an average.
* Find minimum and maximum values.
* Use conditions to assign a letter grade.
* Display calculated results in the DOM.

## Important Terms

### Array

An array stores multiple values in one variable.

```js
const scores = [78, 90, 84, 95];
```

Array positions begin at index `0`.

```js
console.log(scores[0]);
```

This displays `78`.

### Method

A method is a function connected to an object or data type.

Examples include:

```js
scores.push(100);
scores.includes(90);
```

### Function

A function is a reusable block of code that performs a task.

Functions may accept parameters, return values, and receive arrays as arguments.

### Loop

A loop repeats a block of code for each item in a collection.

```js
for (const score of scores) {
  console.log(score);
}
```

### Number Conversion

Values from form inputs arrive as strings. Convert them before calculating.

```js
const enteredGrade = Number(gradeInput.value);
```

## Required Interface

The page must include:

* A heading
* A description
* An input for entering a grade
* An “Add Grade” button
* An “Analyze Grades” button
* A “Clear Grades” button
* A displayed list of entered grades
* A results section
* An error-message area

Suggested structure:

```html
<main>
  <section class="grade-entry">
    <h2>Enter Grades</h2>

    <form id="grade-form">
      <label for="grade-input">Grade from 0 to 100</label>
      <input
        id="grade-input"
        type="number"
        min="0"
        max="100"
      >
      <button type="submit">Add Grade</button>
    </form>
  </section>

  <section>
    <h2>Entered Grades</h2>
    <ul id="grade-list"></ul>
  </section>

  <section class="actions">
    <button id="analyze-button" type="button">
      Analyze Grades
    </button>

    <button id="clear-button" type="button">
      Clear Grades
    </button>
  </section>

  <section id="results" aria-live="polite">
    <h2>Results</h2>
  </section>
</main>
```

## Array Requirement

Create an empty array:

```js
const grades = [];
```

When the user submits a valid grade, add it to the array:

```js
grades.push(enteredGrade);
```

## Input Validation

A valid grade must:

* Be a number
* Be at least `0`
* Be no greater than `100`

The application must reject:

* Empty input
* Text
* Negative numbers
* Numbers above 100

Convert the input using:

```js
const enteredGrade = Number(gradeInput.value);
```

## Required Functions

### Function 1: Add a Grade

Create:

```js
function addGrade(event) {
}
```

This function must:

* Prevent the form from refreshing the page
* Read the input
* Convert the value to a number
* Validate the value
* Add the value to the `grades` array
* Update the displayed grade list
* Clear the input

### Function 2: Display Grades

Create:

```js
function displayGrades() {
}
```

This function must:

* Clear the existing list
* Loop through the `grades` array
* Create one `<li>` for each grade
* Display a message if no grades have been entered

Example loop:

```js
grades.forEach(function (grade) {
  const listItem = document.createElement("li");
  listItem.textContent = grade;
  gradeList.appendChild(listItem);
});
```

### Function 3: Calculate the Average

Create:

```js
function calculateAverage(scoreArray) {
}
```

The function must:

* Accept an array
* Add all grades
* Divide the total by the array length
* Return the average

Example:

```js
function calculateAverage(scoreArray) {
  let total = 0;

  for (const score of scoreArray) {
    total += score;
  }

  return total / scoreArray.length;
}
```

### Function 4: Find the Highest Grade

Create:

```js
function findHighestGrade(scoreArray) {
}
```

The function must return the highest grade.

Students may use a loop or:

```js
Math.max(...scoreArray);
```

Students must be able to explain what the spread syntax `...` does if they use it.

### Function 5: Find the Lowest Grade

Create:

```js
function findLowestGrade(scoreArray) {
}
```

The function must return the lowest grade.

### Function 6: Count Passing Grades

Create:

```js
function countPassingGrades(scoreArray) {
}
```

A passing grade is `70` or higher.

The function must return the number of passing grades.

### Function 7: Determine the Letter Grade

Create:

```js
function determineLetterGrade(average) {
}
```

Use the following scale:

```text
90–100: A
80–89:  B
70–79:  C
60–69:  D
Below 60: F
```

Example:

```js
function determineLetterGrade(average) {
  if (average >= 90) {
    return "A";
  }

  if (average >= 80) {
    return "B";
  }

  if (average >= 70) {
    return "C";
  }

  if (average >= 60) {
    return "D";
  }

  return "F";
}
```

### Function 8: Analyze the Grades

Create:

```js
function analyzeGrades() {
}
```

This function must:

* Confirm that the array is not empty
* Call the calculation functions
* Display all results
* Format the average to two decimal places

Example output:

```text
Average: 84.50
Highest Grade: 96
Lowest Grade: 72
Passing Grades: 5
Failing Grades: 1
Letter Grade: B
Status: Passing
```

### Function 9: Clear Grades

Create:

```js
function clearGrades() {
}
```

This function must:

* Remove all items from the array
* Clear the grade list
* Clear the results section
* Display the empty state

To empty an array without replacing it:

```js
grades.length = 0;
```

## Array Concepts Students Must Demonstrate

The project must use:

* An array
* `.push()`
* `.length`
* At least one loop
* Array indexing or iteration
* An array passed into a function

Optional methods include:

* `.forEach()`
* `.filter()`
* `.reduce()`

Students should not use a method they cannot explain.

## CSS Requirements

The design must include:

* A form layout
* A clearly styled results area
* A visible error style
* A list of entered grades
* Responsive behavior
* Hover and focus styles
* Different visual styles for passing and failing results

Do not communicate pass or fail through color alone. Include written text.

## README Requirements

Explain:

* What the application calculates
* What an array is
* Why array indexes begin at zero
* How grades are added to the array
* How the average is calculated
* Which function was most difficult
* How invalid values are handled

## Suggested Build Process

1. Create the project folder and required files.
2. Build the HTML form, list, and results areas.
3. Style the layout and error states.
4. Create the empty `grades` array.
5. Write and test `addGrade()` with validation.
6. Write `displayGrades()`.
7. Write each calculation function and test it with sample arrays.
8. Connect `analyzeGrades()` to the button.
9. Add `clearGrades()`.
10. Test empty, invalid, passing, and failing cases.
11. Complete the README and reflection questions.

## Reflection Questions

Answer the following in complete sentences:

1. Why is an array appropriate for storing grades?
2. What does `.push()` do?
3. What does the `.length` property represent?
4. Why must input values be converted using `Number()`?
5. What happens if the array is empty when calculating an average?
6. What is the purpose of returning a value from a calculation function?
7. What is the difference between displaying grades and calculating results?
8. How many times does the loop run?

## Submission Requirements

Submit:

* `index.html`
* `styles.css`
* `script.js`
* `README.md`
* A screenshot of the analyzer with results displayed
* Answers to the reflection questions

---

## Evaluation Rubric

### 1. JavaScript Functionality — 35 Points

* Required interactions work
* Functions perform the correct tasks
* Inputs are validated
* Results are displayed correctly
* The application handles empty or invalid states

### 2. Functions and Code Organization — 20 Points

* Required functions are present
* Functions have clear purposes
* Parameters are used appropriately
* Return values are used appropriately
* Code is not unnecessarily duplicated
* Variable and function names are descriptive

### 3. Arrays and Calculations — 15 Points

* Correct array usage
* Appropriate array methods
* Correct loops and indexing
* Accurate average, high, low, and letter-grade calculations
* Clear handling of empty arrays

### 4. HTML, CSS, and Accessibility — 15 Points

* Semantic HTML
* External CSS
* Responsive design
* Form labels
* Keyboard-accessible controls
* Visible focus styles
* Pass and fail communicated with text, not color alone

### 5. README and Reflection — 10 Points

* Complete README
* Accurate terminology
* Reflection questions answered
* Challenges explained
* Student demonstrates understanding

### 6. Code Quality — 5 Points

* Proper indentation
* Organized files
* Useful comments
* No unnecessary console messages
* No large blocks of repeated code

**Total: 100 Points**
