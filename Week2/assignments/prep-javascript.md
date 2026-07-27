# JavaScript Pre-Preparation Unit

## Course Project Overview

Before beginning the JavaScript practice assignments, students must complete this preparation unit.

This unit introduces the vocabulary, syntax, and problem-solving skills needed for:

1. An Interactive Profile Card
2. A Student Grade Analyzer
3. A Product Catalog
4. A Mini Shopping Cart

Students should type and test every example rather than only reading the code.

### General Requirements

For this preparation unit:

* Use this project structure:

```text
javascript-prep/
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
* Include comments that identify major sections of JavaScript.
* Avoid using `var`.
* Prefer `const` by default and `let` when reassignment is necessary.
* Prefer `===` instead of `==`.
* Complete the knowledge check and coding challenges.

---

## Project Description

Complete a guided JavaScript preparation unit that builds the foundational skills required for Assignments 5 through 8.

Students will practice variables, data types, operators, conditions, functions, arrays, objects, loops, DOM selection, events, forms, rendering, and debugging through typed examples and two guided mini-projects.

## Learning Objectives

By the end of this preparation unit, students should be able to:

* Explain the role of JavaScript in a webpage.
* Connect an external JavaScript file.
* Use the browser console.
* Create variables with `const` and `let`.
* Identify common JavaScript data types.
* Perform calculations with operators.
* Create conditional statements.
* Write and call functions.
* Use parameters and return values.
* Create and update arrays.
* Create and read objects.
* Loop through data.
* Use basic array methods.
* Select and modify HTML elements.
* Respond to browser events.
* Read information entered into a form.
* Identify and correct basic JavaScript errors.

## Important Terms

### JavaScript

JavaScript controls behavior and interactivity on a webpage.

```text
HTML = Structure
CSS = Presentation
JavaScript = Behavior
```

### Variable

A variable stores a value that can be used later.

### Function

A function is a reusable block of code that performs a task.

### Array

An array stores multiple values in one variable. Indexes begin at `0`.

### Object

An object stores related information using property-and-value pairs.

### DOM

DOM stands for Document Object Model. The browser converts HTML into objects that JavaScript can access and change.

### Event Listener

An event listener waits for an event and runs a function when the event occurs.

### Rendering

Rendering means converting application data into visible page content.

### Debugging

Debugging is the process of finding and correcting problems in code.

---

# Part 1: The Role of JavaScript

Web applications commonly use three main technologies:

## HTML

HTML provides the structure and content of a webpage.

Examples include:

* Headings
* Paragraphs
* Images
* Forms
* Buttons
* Navigation

## CSS

CSS controls presentation and layout.

Examples include:

* Colors
* Fonts
* Spacing
* Borders
* Flexbox
* Grid
* Responsive design

## JavaScript

JavaScript controls behavior and interactivity.

Examples include:

* Responding to button clicks
* Updating text
* Validating forms
* Performing calculations
* Displaying product data
* Filtering search results
* Adding items to a shopping cart

---

# Part 2: Connecting JavaScript to HTML

Create the following basic HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Preparation</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js" defer></script>
</head>
<body>
  <header>
    <h1>JavaScript Preparation</h1>
  </header>

  <main>
    <section>
      <h2>Practice Area</h2>
      <p id="message">JavaScript is connected.</p>
      <button id="practice-button" type="button">
        Test JavaScript
      </button>
    </section>
  </main>

  <footer>
    <p>Basic JavaScript Practice</p>
  </footer>
</body>
</html>
```

The JavaScript file is connected with:

```html
<script src="script.js" defer></script>
```

### What Does `defer` Mean?

The `defer` attribute tells the browser to wait until the HTML has been read before running the JavaScript.

This is useful because JavaScript often needs to find and change HTML elements.

Without `defer`, the JavaScript may run before the HTML elements are available.

---

# Part 3: The Browser Console

The browser console is an important development tool.

It allows developers to:

* Display values
* Test code
* Inspect variables
* Read errors
* Debug problems

Open the browser developer tools and select the **Console** tab.

Add this to `script.js`:

```js
console.log("JavaScript is connected.");
```

Refresh the browser.

You should see:

```text
JavaScript is connected.
```

### Practice

Add three more console messages:

```js
console.log("My name is Student Name.");
console.log("I am learning JavaScript.");
console.log(5 + 5);
```

---

# Part 4: JavaScript Statements and Syntax

A JavaScript statement is an instruction that the browser executes.

Example:

```js
const courseName = "Web Development";
```

Most JavaScript statements end with a semicolon.

JavaScript is case-sensitive.

These names are different:

```js
studentName
StudentName
studentname
```

Use consistent capitalization.

---

# Part 5: Comments

Comments explain code and are ignored by the browser.

### Single-Line Comment

```js
// This is a single-line comment.
```

### Multi-Line Comment

```js
/*
  This is a
  multi-line comment.
*/
```

Use comments to identify sections or explain decisions.

Do not comment every obvious line.

Good example:

```js
// Calculate the final price after the discount.
const finalPrice = originalPrice - discount;
```

Unnecessary example:

```js
// Create a variable called name.
const name = "Jordan";
```

---

# Part 6: Variables

A variable stores a value.

Use `const` or `let` to create variables.

### Using `const`

Use `const` when the variable should not be reassigned.

```js
const courseTitle = "Introduction to JavaScript";
const passingGrade = 70;
```

The value cannot be replaced later:

```js
const passingGrade = 70;
passingGrade = 75;
```

This causes an error.

### Using `let`

Use `let` when the value may change.

```js
let score = 80;
score = 90;
```

The variable now contains `90`.

### Avoid `var`

Older JavaScript code may use `var`.

For these assignments, use:

* `const` by default
* `let` when reassignment is necessary

---

# Part 7: Naming Variables

Use descriptive variable names.

Good examples:

```js
const studentName = "Maya";
const productPrice = 29.99;
let cartQuantity = 2;
```

Weak examples:

```js
const x = "Maya";
const p = 29.99;
let q = 2;
```

Use camel case for JavaScript variable and function names.

```js
studentName
productPrice
calculateAverage
displayProducts
```

Camel case begins with a lowercase word. Each additional word begins with an uppercase letter.

---

# Part 8: Basic Data Types

A data type describes the kind of value stored in a variable.

### String

A string represents text.

```js
const firstName = "Maya";
const course = "Web Development";
```

Strings may use:

```js
"Double quotes"
'Single quotes'
`Backticks`
```

Use backticks for template literals.

### Number

JavaScript uses the `number` type for whole numbers and decimal numbers.

```js
const studentAge = 22;
const productPrice = 19.99;
```

Do not place quotation marks around a value when it should be treated as a number.

```js
const correctPrice = 19.99;
const incorrectPrice = "19.99";
```

The second value is a string.

### Boolean

A Boolean stores either:

```js
true
false
```

Example:

```js
const isLoggedIn = true;
const isOutOfStock = false;
```

Booleans are useful for decisions.

### Undefined

A variable is `undefined` when it has been created but does not have a value.

```js
let selectedProduct;
console.log(selectedProduct);
```

### Null

`null` intentionally represents no value.

```js
const selectedStudent = null;
```

### Array

An array stores multiple values.

```js
const grades = [90, 85, 78, 96];
```

### Object

An object stores related values using named properties.

```js
const student = {
  name: "Maya",
  major: "Computer Science",
  graduationYear: 2027
};
```

---

# Part 9: Using `typeof`

The `typeof` operator identifies a value’s basic data type.

```js
console.log(typeof "JavaScript");
console.log(typeof 100);
console.log(typeof true);
```

Expected results:

```text
string
number
boolean
```

### Practice

Create one variable for each:

* A student name
* A student age
* A passing status

Display the type of each value.

---

# Part 10: Strings and Template Literals

Strings can be combined using the `+` operator.

```js
const firstName = "Maya";
const greeting = "Hello, " + firstName + "!";
```

A cleaner option is a template literal.

```js
const greeting = `Hello, ${firstName}!`;
```

Template literals use backticks.

The `${}` syntax inserts a value into the string.

### Example

```js
const productName = "Keyboard";
const productPrice = 39.99;

const productMessage =
  `${productName} costs $${productPrice}.`;

console.log(productMessage);
```

### Practice

Create variables for:

* Student name
* Course name
* Current score

Create a sentence using a template literal.

---

# Part 11: Basic Operators

Operators perform calculations or comparisons.

### Arithmetic Operators

```js
const addition = 10 + 5;
const subtraction = 10 - 5;
const multiplication = 10 * 5;
const division = 10 / 5;
const remainder = 10 % 3;
```

The remainder operator `%` returns what remains after division.

```js
10 % 3
```

Returns:

```text
1
```

### Assignment Operators

```js
let score = 80;

score = score + 5;
score += 5;
score -= 10;
score *= 2;
```

### Increment and Decrement

```js
let quantity = 1;

quantity++;
quantity--;
```

`quantity++` adds one.

`quantity--` subtracts one.

---

# Part 12: Comparison Operators

Comparison operators produce Boolean values.

```js
10 > 5
10 < 5
10 >= 10
10 <= 8
10 === 10
10 !== 5
```

### Strict Equality

Use:

```js
===
```

Strict equality compares both value and data type.

```js
10 === 10
```

Returns `true`.

```js
10 === "10"
```

Returns `false`.

For these assignments, use `===` instead of `==`.

---

# Part 13: Logical Operators

Logical operators combine conditions.

### AND

```js
&&
```

Both conditions must be true.

```js
const hasAccount = true;
const hasPassword = true;

const canLogIn = hasAccount && hasPassword;
```

### OR

```js
||
```

At least one condition must be true.

```js
const isAdmin = false;
const isInstructor = true;

const canEdit = isAdmin || isInstructor;
```

### NOT

```js
!
```

NOT reverses a Boolean value.

```js
const isLoggedIn = false;
console.log(!isLoggedIn);
```

This displays `true`.

---

# Part 14: Conditional Statements

Conditional statements allow a program to make decisions.

### Basic `if` Statement

```js
const score = 85;

if (score >= 70) {
  console.log("The student passed.");
}
```

The code inside the braces runs only when the condition is true.

### `if` and `else`

```js
const score = 62;

if (score >= 70) {
  console.log("The student passed.");
} else {
  console.log("The student did not pass.");
}
```

### `else if`

```js
const score = 88;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
```

Conditions are checked from top to bottom.

The first matching block runs.

### Practice: Grade Status

Create a variable named `studentScore`.

Display:

* `"Excellent"` for scores of 90 or higher
* `"Passing"` for scores from 70 through 89
* `"Needs Improvement"` for scores below 70

Test the program with at least three different scores.

---

# Part 15: Truthy and Falsy Values

Some values behave like `true` or `false` inside conditions.

Common falsy values include:

```js
false
0
""
null
undefined
NaN
```

Example:

```js
const username = "";

if (username) {
  console.log("A username was entered.");
} else {
  console.log("The username is empty.");
}
```

This is useful when checking form input.

---

# Part 16: Functions

A function is a reusable block of code that performs a task.

### Function Declaration

```js
function displayWelcomeMessage() {
  console.log("Welcome to JavaScript class.");
}
```

Creating a function does not automatically run it.

Call the function:

```js
displayWelcomeMessage();
```

---

# Part 17: Parameters and Arguments

A parameter is a variable listed in the function definition.

```js
function greetStudent(studentName) {
  console.log(`Welcome, ${studentName}!`);
}
```

An argument is the value passed into the function.

```js
greetStudent("Maya");
greetStudent("Jordan");
```

The same function can work with different values.

### Multiple Parameters

```js
function calculateTotal(price, quantity) {
  const total = price * quantity;
  console.log(total);
}

calculateTotal(10, 3);
```

The parameters are:

```text
price
quantity
```

The arguments are:

```text
10
3
```

---

# Part 18: Return Values

A function may return a result.

```js
function calculateTotal(price, quantity) {
  return price * quantity;
}
```

Store the returned value:

```js
const orderTotal = calculateTotal(10, 3);
console.log(orderTotal);
```

Output:

```text
30
```

A returned value can be reused.

```js
const subtotal = calculateTotal(25, 2);
const tax = subtotal * 0.08875;
const finalTotal = subtotal + tax;
```

### Important Difference

This function only displays a value:

```js
function calculateTotal(price, quantity) {
  console.log(price * quantity);
}
```

This function returns a reusable value:

```js
function calculateTotal(price, quantity) {
  return price * quantity;
}
```

---

# Part 19: Function Practice

Create the following functions.

### Function 1: Create a Greeting

```js
function createGreeting(name) {
  return `Welcome, ${name}!`;
}
```

Test it:

```js
console.log(createGreeting("Maya"));
```

### Function 2: Add Two Numbers

```js
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
```

### Function 3: Determine Passing Status

```js
function determinePassingStatus(score) {
  if (score >= 70) {
    return "Passing";
  }

  return "Not Passing";
}
```

### Function 4: Calculate a Product Total

```js
function calculateProductTotal(price, quantity) {
  return price * quantity;
}
```

Students must call each function with at least two different sets of arguments.

---

# Part 20: Arrays

An array stores multiple values in one variable.

```js
const studentNames = ["Maya", "Jordan", "Carlos", "Ava"];
```

Arrays use square brackets.

Values are separated with commas.

---

# Part 21: Array Indexes

Each array value has a numbered position called an index.

Array indexes begin at `0`.

```js
const studentNames = ["Maya", "Jordan", "Carlos"];
```

The indexes are:

```text
Maya   → 0
Jordan → 1
Carlos → 2
```

Access a value:

```js
console.log(studentNames[0]);
console.log(studentNames[2]);
```

---

# Part 22: Array Length

The `.length` property returns the number of items in an array.

```js
const scores = [90, 80, 75, 88];

console.log(scores.length);
```

Output:

```text
4
```

The final index is always one less than the length.

```js
const finalIndex = scores.length - 1;
```

---

# Part 23: Changing Array Values

```js
const colors = ["red", "blue", "green"];

colors[1] = "purple";

console.log(colors);
```

The array becomes:

```text
["red", "purple", "green"]
```

Even though the array was created with `const`, its contents may still be changed.

The variable cannot be replaced with a different array.

---

# Part 24: Basic Array Methods

### `.push()`

Adds an item to the end of an array.

```js
const grades = [80, 90];
grades.push(85);
```

Result:

```text
[80, 90, 85]
```

### `.pop()`

Removes the final item.

```js
grades.pop();
```

### `.includes()`

Checks whether an array contains a value.

```js
const names = ["Maya", "Jordan"];

console.log(names.includes("Maya"));
```

Returns `true`.

### `.indexOf()`

Returns the index of a matching value.

```js
console.log(names.indexOf("Jordan"));
```

Returns `1`.

If the value does not exist, it returns `-1`.

---

# Part 25: Array Practice

Create:

```js
const grades = [78, 95, 82, 68];
```

Complete the following:

1. Display the first grade.
2. Display the final grade.
3. Display the number of grades.
4. Add a grade using `.push()`.
5. Check whether the array includes `95`.
6. Change the grade at index `3`.
7. Display the updated array.

---

# Part 26: Loops

Loops repeat code.

### `for` Loop

```js
const names = ["Maya", "Jordan", "Carlos"];

for (let index = 0; index < names.length; index++) {
  console.log(names[index]);
}
```

A `for` loop contains:

1. Starting value
2. Condition
3. Update

```js
let index = 0
index < names.length
index++
```

### `for...of` Loop

A `for...of` loop reads each item directly.

```js
const scores = [90, 85, 78];

for (const score of scores) {
  console.log(score);
}
```

Use `for...of` when you need each value and do not need the index.

### `.forEach()`

The `.forEach()` method runs a function once for every array item.

```js
const names = ["Maya", "Jordan", "Carlos"];

names.forEach(function (name) {
  console.log(name);
});
```

Arrow-function version:

```js
names.forEach((name) => {
  console.log(name);
});
```

Students may use either syntax.

---

# Part 27: Loop Practice

Create:

```js
const prices = [10, 15, 20, 25];
```

Use a loop to:

1. Display each price.
2. Add every price to a variable named `total`.
3. Display the final total.

Example starting point:

```js
let total = 0;

for (const price of prices) {
  total += price;
}

console.log(total);
```

---

# Part 28: Objects

An object stores related values using named properties.

```js
const student = {
  name: "Maya",
  major: "Computer Science",
  graduationYear: 2027,
  isEnrolled: true
};
```

The property names are:

```text
name
major
graduationYear
isEnrolled
```

The values are:

```text
"Maya"
"Computer Science"
2027
true
```

---

# Part 29: Reading Object Properties

Use dot notation:

```js
console.log(student.name);
console.log(student.major);
```

Bracket notation may also be used:

```js
console.log(student["name"]);
```

Use dot notation for most basic assignments.

---

# Part 30: Changing Object Properties

```js
student.major = "Information Systems";
student.graduationYear = 2028;
```

Add a new property:

```js
student.email = "student@example.com";
```

---

# Part 31: Object Methods

An object may contain a function.

```js
const student = {
  name: "Maya",
  score: 90,
  displaySummary: function () {
    return `${this.name} earned ${this.score}.`;
  }
};

console.log(student.displaySummary());
```

An object function is called a method.

The keyword `this` refers to the current object in this example.

Object methods are optional for the beginning assignments, but students should recognize the term.

---

# Part 32: Object Practice

Create a product object with:

* `id`
* `name`
* `price`
* `category`
* `inStock`

Example:

```js
const product = {
  id: 1,
  name: "Wireless Mouse",
  price: 24.99,
  category: "Electronics",
  inStock: true
};
```

Complete the following:

1. Display the product name.
2. Display the price.
3. Change the price.
4. Add a `quantity` property.
5. Create a sentence using a template literal.
6. Use a condition to display whether the product is available.

---

# Part 33: Arrays of Objects

Applications frequently store objects inside arrays.

```js
const products = [
  {
    id: 1,
    name: "Keyboard",
    price: 39.99
  },
  {
    id: 2,
    name: "Mouse",
    price: 24.99
  },
  {
    id: 3,
    name: "Monitor",
    price: 199.99
  }
];
```

Access the first product:

```js
console.log(products[0]);
```

Access the first product’s name:

```js
console.log(products[0].name);
```

Loop through the products:

```js
for (const product of products) {
  console.log(product.name);
}
```

---

# Part 34: Array Methods with Objects

### `.find()`

Returns the first matching item.

```js
const selectedProduct = products.find(function (product) {
  return product.id === 2;
});
```

The result is the mouse object.

### `.filter()`

Returns a new array containing every matching item.

```js
const affordableProducts = products.filter(function (product) {
  return product.price < 50;
});
```

### `.map()`

Creates a new array by transforming each item.

```js
const productNames = products.map(function (product) {
  return product.name;
});
```

Result:

```text
["Keyboard", "Mouse", "Monitor"]
```

### `.reduce()`

Combines array items into one result.

```js
const totalPrice = products.reduce(function (total, product) {
  return total + product.price;
}, 0);
```

For beginner assignments, students may use a loop instead of `.reduce()` when they are not comfortable explaining it.

---

# Part 35: Array-of-Objects Practice

Using the `products` array:

1. Display every product name.
2. Find the product with an ID of `2`.
3. Filter products that cost less than `$50`.
4. Create an array containing only product names.
5. Calculate the combined price of all products.

---

# Part 36: Introduction to the DOM

DOM stands for Document Object Model.

The browser converts HTML into objects that JavaScript can access.

Suppose the HTML contains:

```html
<h2 id="page-heading">Original Heading</h2>
```

Select it with JavaScript:

```js
const pageHeading = document.querySelector("#page-heading");
```

Change its text:

```js
pageHeading.textContent = "Updated Heading";
```

---

# Part 37: Selecting HTML Elements

### Select by ID

```js
const message = document.querySelector("#message");
```

### Select by Class

```js
const card = document.querySelector(".profile-card");
```

### Select by Element

```js
const heading = document.querySelector("h1");
```

`querySelector()` returns the first matching element.

Select multiple matching elements:

```js
const buttons = document.querySelectorAll("button");
```

---

# Part 38: Changing HTML Content

### `.textContent`

Changes plain text.

```js
message.textContent = "The message has changed.";
```

### `.innerHTML`

Adds HTML content.

```js
message.innerHTML = "<strong>Important message</strong>";
```

Use `.textContent` when HTML formatting is not required.

Avoid inserting untrusted user input with `.innerHTML`.

---

# Part 39: Changing CSS Classes

Add a class:

```js
card.classList.add("active");
```

Remove a class:

```js
card.classList.remove("active");
```

Toggle a class:

```js
card.classList.toggle("dark-theme");
```

Check whether a class exists:

```js
card.classList.contains("active");
```

---

# Part 40: Events and Event Listeners

An event is an action that occurs in the browser.

Examples include:

* `click`
* `submit`
* `input`
* `change`
* `keydown`

Add an event listener:

```js
const practiceButton =
  document.querySelector("#practice-button");

practiceButton.addEventListener("click", function () {
  console.log("The button was clicked.");
});
```

---

# Part 41: Named Event Functions

Instead of writing the function directly inside the event listener, create a named function.

```js
function handlePracticeButtonClick() {
  console.log("The button was clicked.");
}

practiceButton.addEventListener(
  "click",
  handlePracticeButtonClick
);
```

Named functions are easier to:

* Read
* Test
* Reuse
* Debug

---

# Part 42: Event Objects

The browser provides information about an event.

```js
function handleClick(event) {
  console.log(event);
  console.log(event.target);
}
```

`event.target` represents the element that caused the event.

---

# Part 43: Forms and `preventDefault()`

Forms normally refresh the page when submitted.

JavaScript can prevent this behavior.

HTML:

```html
<form id="student-form">
  <label for="student-name">Student name</label>
  <input id="student-name" type="text">
  <button type="submit">Submit</button>
</form>
```

JavaScript:

```js
const studentForm =
  document.querySelector("#student-form");

function handleStudentForm(event) {
  event.preventDefault();

  console.log("The form was submitted.");
}

studentForm.addEventListener(
  "submit",
  handleStudentForm
);
```

---

# Part 44: Reading Form Input

Select the input:

```js
const studentNameInput =
  document.querySelector("#student-name");
```

Read its value:

```js
const enteredName = studentNameInput.value;
```

Remove extra spaces:

```js
const enteredName =
  studentNameInput.value.trim();
```

Check whether it is empty:

```js
if (enteredName === "") {
  console.log("Please enter a name.");
}
```

Clear the input:

```js
studentNameInput.value = "";
```

---

# Part 45: Converting Input into a Number

Input values are usually returned as strings.

HTML:

```html
<input id="score-input" type="number">
```

JavaScript:

```js
const scoreInput =
  document.querySelector("#score-input");

const score = Number(scoreInput.value);
```

Without `Number()`, JavaScript may treat the value as text.

Example:

```js
"10" + "5"
```

Result:

```text
105
```

With number conversion:

```js
Number("10") + Number("5")
```

Result:

```text
15
```

---

# Part 46: Checking for Invalid Numbers

Use `Number.isNaN()`:

```js
const score = Number(scoreInput.value);

if (Number.isNaN(score)) {
  console.log("Please enter a valid number.");
}
```

A grade validation condition might be:

```js
if (
  Number.isNaN(score) ||
  score < 0 ||
  score > 100
) {
  console.log("Enter a grade from 0 to 100.");
}
```

---

# Part 47: Creating HTML with JavaScript

Create an element:

```js
const listItem = document.createElement("li");
```

Add text:

```js
listItem.textContent = "JavaScript";
```

Add it to the page:

```js
const skillList = document.querySelector("#skill-list");
skillList.appendChild(listItem);
```

---

# Part 48: Rendering an Array

Suppose the HTML contains:

```html
<ul id="student-list"></ul>
```

JavaScript:

```js
const studentList =
  document.querySelector("#student-list");

const students = ["Maya", "Jordan", "Carlos"];

function displayStudents() {
  studentList.innerHTML = "";

  students.forEach(function (student) {
    const listItem = document.createElement("li");
    listItem.textContent = student;
    studentList.appendChild(listItem);
  });
}

displayStudents();
```

This process is often called rendering.

Changing the array does not automatically update the webpage.

After changing the data, the display function usually needs to run again.

```js
students.push("Ava");
displayStudents();
```

---

# Part 49: Data and Display

Students must understand the difference between data and display.

### Data

```js
const grades = [90, 80, 85];
```

### Display

```html
<ul>
  <li>90</li>
  <li>80</li>
  <li>85</li>
</ul>
```

The array stores the information.

JavaScript creates or updates the visible HTML.

---

# Part 50: Basic Error Types

### Syntax Error

A syntax error means JavaScript cannot understand the code.

Incorrect:

```js
const name = "Maya;
```

The closing quotation mark is missing.

### Reference Error

A reference error occurs when code uses a variable that does not exist.

```js
console.log(studentScore);
```

This causes an error when `studentScore` was never created.

### Type Error

A type error occurs when an operation is used on an incompatible value.

```js
const score = 90;
score.toUpperCase();
```

Numbers do not have a `.toUpperCase()` method.

### Logic Error

A logic error means the program runs but produces the wrong result.

```js
function calculateTotal(price, quantity) {
  return price + quantity;
}
```

The function should multiply, not add.

Logic errors may not appear in the console.

Students must test expected results.

---

# Part 51: Debugging Process

When code does not work, follow these steps:

1. Read the console error.
2. Identify the file and line number.
3. Check spelling and capitalization.
4. Check matching quotation marks.
5. Check matching parentheses and braces.
6. Confirm the JavaScript file is connected.
7. Confirm the selector matches the HTML.
8. Use `console.log()` to inspect values.
9. Test one small section at a time.
10. Compare the actual result to the expected result.

Do not randomly change multiple lines at once.

---

# Part 52: Common Beginner Problems

### JavaScript File Is Not Connected

Check:

```html
<script src="script.js" defer></script>
```

Confirm that the filename and path are correct.

### Selector Returns `null`

Example:

```js
const button =
  document.querySelector("#submit-button");
```

Possible causes:

* The HTML ID is different
* The element does not exist
* The JavaScript ran too early
* The selector contains a spelling mistake

### Button Refreshes the Page

A button inside a form may submit the form.

For non-submit buttons, use:

```html
<button type="button">Change Theme</button>
```

For form submission:

```js
event.preventDefault();
```

### Input Number Behaves Like Text

Convert the value:

```js
const value = Number(input.value);
```

### Array Changes but Page Does Not

Run the display function again.

```js
grades.push(newGrade);
displayGrades();
```

### Function Does Not Run

Confirm that the function is called:

```js
displayProducts();
```

Or connected to an event:

```js
button.addEventListener("click", displayProducts);
```

---

# Part 53: Guided Mini-Project

## Student List Manager

Create a small application that allows the user to add student names to an array and display them on the page.

This mini-project combines:

* Variables
* Arrays
* Functions
* Forms
* Events
* Input validation
* DOM creation
* Rendering

### Required HTML

```html
<main>
  <section>
    <h2>Add a Student</h2>

    <form id="student-form">
      <label for="student-name">
        Student name
      </label>

      <input
        id="student-name"
        type="text"
        autocomplete="name"
      >

      <button type="submit">
        Add Student
      </button>
    </form>

    <p id="form-message" aria-live="polite"></p>
  </section>

  <section>
    <h2>Students</h2>
    <p>
      Total students:
      <span id="student-count">0</span>
    </p>
    <ul id="student-list"></ul>
  </section>
</main>
```

### Step 1: Select the Elements

```js
const studentForm =
  document.querySelector("#student-form");

const studentNameInput =
  document.querySelector("#student-name");

const formMessage =
  document.querySelector("#form-message");

const studentList =
  document.querySelector("#student-list");

const studentCount =
  document.querySelector("#student-count");
```

### Step 2: Create the Array

```js
const students = [];
```

### Step 3: Create the Display Function

```js
function displayStudents() {
  studentList.innerHTML = "";

  students.forEach(function (student) {
    const listItem = document.createElement("li");
    listItem.textContent = student;
    studentList.appendChild(listItem);
  });

  studentCount.textContent = students.length;
}
```

### Step 4: Create the Form Function

```js
function addStudent(event) {
  event.preventDefault();

  const enteredName =
    studentNameInput.value.trim();

  if (enteredName === "") {
    formMessage.textContent =
      "Please enter a student name.";
    return;
  }

  students.push(enteredName);

  formMessage.textContent =
    `${enteredName} was added.`;

  studentNameInput.value = "";

  displayStudents();
}
```

### Step 5: Add the Event Listener

```js
studentForm.addEventListener(
  "submit",
  addStudent
);
```

### Step 6: Display the Initial State

```js
displayStudents();
```

### Mini-Project Extension Tasks

After the basic project works, add:

1. A button that clears all students.
2. A message when the array is empty.
3. A check that prevents duplicate names.
4. A button that sorts names alphabetically.
5. A button that removes the final student.
6. A search input that filters displayed names.

---

# Part 54: Guided Object Mini-Project

## Product Information Card

Create one product object:

```js
const product = {
  id: 1,
  name: "Wireless Keyboard",
  price: 39.99,
  category: "Electronics",
  description: "A compact wireless keyboard.",
  inStock: true
};
```

Create a function:

```js
function displayProduct(productObject) {
  const productName =
    document.querySelector("#product-name");

  const productPrice =
    document.querySelector("#product-price");

  const productCategory =
    document.querySelector("#product-category");

  const productDescription =
    document.querySelector("#product-description");

  const productStock =
    document.querySelector("#product-stock");

  productName.textContent = productObject.name;

  productPrice.textContent =
    productObject.price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

  productCategory.textContent =
    productObject.category;

  productDescription.textContent =
    productObject.description;

  if (productObject.inStock) {
    productStock.textContent = "In Stock";
  } else {
    productStock.textContent = "Out of Stock";
  }
}

displayProduct(product);
```

Students should explain:

* What information the object stores
* Why the function accepts an object
* How dot notation is used
* How the condition checks inventory
* How the price is formatted

---

# Part 55: Knowledge Check

Answer the following questions before beginning Assignment 5.

1. What role does JavaScript have in a webpage?
2. What does the `defer` attribute do?
3. What is the browser console used for?
4. What is the difference between `const` and `let`?
5. What is a string?
6. What is a number?
7. What is a Boolean?
8. What does strict equality compare?
9. What is a conditional statement?
10. What is a function?
11. What is a parameter?
12. What is an argument?
13. What is a return value?
14. What is an array?
15. At what number do array indexes begin?
16. What does `.push()` do?
17. What does `.length` return?
18. What is an object?
19. What is an object property?
20. What is an array of objects?
21. What does a loop do?
22. What does `.forEach()` do?
23. What does `.find()` return?
24. What does `.filter()` return?
25. What does the DOM represent?
26. What does `document.querySelector()` do?
27. What is an event?
28. What does an event listener do?
29. Why is `event.preventDefault()` used with forms?
30. Why should an input value sometimes be converted with `Number()`?
31. What does `.trim()` do?
32. What does `.textContent` change?
33. What does `classList.toggle()` do?
34. What is rendering?
35. What is debugging?

---

# Part 56: Coding Check

Students should be able to complete the following without copying a complete solution.

### Challenge 1

Create a function that accepts a name and returns a greeting.

```js
createGreeting("Maya");
```

Expected result:

```text
Welcome, Maya!
```

### Challenge 2

Create a function that accepts two numbers and returns their product.

```js
multiplyNumbers(5, 4);
```

Expected result:

```text
20
```

### Challenge 3

Create an array containing five grades.

Display:

* The first grade
* The final grade
* The number of grades

### Challenge 4

Loop through the grades and calculate their total.

### Challenge 5

Create a student object with:

* Name
* Major
* Score
* Passing status

Display one sentence using the object properties.

### Challenge 6

Create an array containing three product objects.

Display every product name.

### Challenge 7

Select a heading and change its text.

### Challenge 8

Create a button that changes the page background when clicked.

### Challenge 9

Create a form that reads a student name without refreshing the page.

### Challenge 10

Create a function that receives an array of scores and returns the average.

---

## README Requirements

The preparation README must include:

```md
# JavaScript Pre-Preparation

## Student

Your Name

## Topics Practiced

- Variables
- Data types
- Operators
- Conditional statements
- Functions
- Arrays
- Objects
- Loops
- DOM manipulation
- Events
- Forms
- Debugging

## Most Important Concept

Explain which JavaScript concept was most important to you.

## Most Difficult Concept

Explain which concept was most difficult and why.

## Debugging Example

Describe one error you encountered and how you corrected it.

## Assignment Readiness

Explain how this preparation work will help you complete the upcoming JavaScript assignments.
```

## Suggested Build Process

1. Create the `javascript-prep` folder and required files.
2. Connect HTML, CSS, and JavaScript with `defer`.
3. Practice console logging and basic syntax.
4. Complete the variable, operator, and condition exercises.
5. Write and test the practice functions.
6. Complete the array and loop exercises.
7. Complete the object and array-of-objects exercises.
8. Practice DOM selection, events, and forms.
9. Build the Student List Manager.
10. Build the Product Information Card.
11. Complete the knowledge check and coding challenges.
12. Finish the README.

## Reflection Questions

Answer the following in complete sentences:

1. Which JavaScript concept was most important for preparing for Assignments 5 through 8?
2. Which concept was most difficult, and how did you practice it?
3. What is the difference between data and display?
4. Why must display functions often run again after array data changes?
5. How did the browser console help you debug an error?

## Submission Requirements

Submit:

* `index.html`
* `styles.css`
* `script.js`
* `README.md`
* Completed Student List Manager
* Completed Product Information Card
* Knowledge Check answers
* Coding Check solutions
* A screenshot of the browser console
* A screenshot of the completed webpage
* Answers to the reflection questions

---

## Evaluation Rubric

### 1. Variables and Data Types — 10 Points

* Correct use of `const` and `let`
* Correct strings, numbers, and Booleans
* Descriptive variable names

### 2. Operators and Conditions — 10 Points

* Correct calculations
* Correct comparisons
* Appropriate conditional statements
* Correct use of strict equality

### 3. Functions — 20 Points

* Functions have clear purposes
* Parameters are used correctly
* Arguments are passed correctly
* Return values are used correctly
* Functions are called and tested

### 4. Arrays and Loops — 15 Points

* Arrays are created correctly
* Array indexes are understood
* Values are added or updated
* Loops process array values
* Appropriate array methods are used

### 5. Objects — 15 Points

* Objects contain appropriate properties
* Dot notation is used correctly
* Object properties are updated
* Objects are stored in arrays
* Objects are passed into functions

### 6. DOM and Events — 15 Points

* HTML elements are selected
* Text is updated
* CSS classes are changed
* Event listeners work
* Forms use `preventDefault()`
* Input values are read and validated

### 7. Debugging and Code Quality — 10 Points

* Code is properly indented
* Names are descriptive
* Errors are investigated with the console
* Comments identify major sections
* Student can explain corrections

### 8. README and Knowledge Check — 5 Points

* README is complete
* Knowledge Check is complete
* Reflection questions are answered
* Answers demonstrate understanding

**Total: 100 Points**

---

## Readiness Standard

Students are ready to begin Assignment 5 when they can:

* Connect JavaScript to HTML.
* Use the browser console.
* Create and update variables.
* Write a conditional statement.
* Create and call a function.
* Explain parameters and return values.
* Add values to an array.
* Loop through an array.
* Read properties from an object.
* Loop through an array of objects.
* Select an HTML element.
* Respond to a button click.
* Read a form input.
* Prevent a form from refreshing the page.
* Display JavaScript data on the webpage.
* Use the console to investigate an error.

Students who cannot yet complete these tasks should review the preparation exercises before beginning the larger assignments.
