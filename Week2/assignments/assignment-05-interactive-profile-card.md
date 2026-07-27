# Assignment 5: Interactive Profile Card

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

Create an interactive student or professional profile card.

The webpage should display basic profile information and allow the user to interact with the card by entering a name, changing the profile message, and switching between light and dark themes.

This assignment introduces:

* Variables
* Functions
* Parameters
* Return values
* DOM selection
* Event listeners
* Form input
* Conditional statements
* Changing text and CSS classes with JavaScript

## Learning Objectives

By completing this assignment, students will be able to:

* Connect an external JavaScript file.
* Select HTML elements using JavaScript.
* Read information from an input field.
* Respond to button-click events.
* Create and call functions.
* Pass arguments into functions.
* Return values from functions.
* Change text on a webpage.
* Add and remove CSS classes.
* Use conditional statements.

## Important Terms

### JavaScript

JavaScript is a programming language used to add behavior and interactivity to webpages.

HTML provides structure, CSS controls presentation, and JavaScript controls behavior.

### Variable

A variable stores a value that can be used later.

```js
const studentName = "Jordan";
let score = 85;
```

Use `const` when a variable should not be reassigned.

Use `let` when the value may change.

Avoid using `var` in these assignments.

### Function

A function is a reusable block of code that performs a task.

```js
function greetStudent(name) {
  return `Welcome, ${name}!`;
}
```

### Parameter

A parameter is a variable listed in the function definition.

In the example below, `name` is a parameter:

```js
function greetStudent(name) {
  return `Welcome, ${name}!`;
}
```

### Argument

An argument is the value passed into a function when it is called.

```js
greetStudent("Jordan");
```

`"Jordan"` is the argument.

### Return Value

A return value is the result sent back by a function.

```js
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
```

### DOM

DOM stands for Document Object Model.

The browser converts HTML into objects that JavaScript can access and change.

```js
const heading = document.querySelector("h1");
heading.textContent = "Updated Heading";
```

### Event Listener

An event listener waits for an event and runs a function when the event occurs.

```js
button.addEventListener("click", displayMessage);
```

## Required Page Content

The page must contain:

* A semantic `<header>`
* A semantic `<main>`
* A profile `<article>`
* A profile image or placeholder
* A name heading
* A professional title
* A short biography
* A form with a name input
* An “Update Name” button
* A “Change Message” button
* A “Toggle Theme” button
* A semantic `<footer>`

Suggested semantic structure:

```html
<header>
  <h1>Interactive Profile Card</h1>
</header>

<main>
  <article class="profile-card">
    <img src="profile.png" alt="Profile placeholder">

    <section class="profile-information">
      <h2 id="profile-name">Student Name</h2>
      <p id="profile-title">Web Development Student</p>
      <p id="profile-message">
        I am learning HTML, CSS, and JavaScript.
      </p>
    </section>

    <form id="name-form">
      <label for="name-input">Enter a new name</label>
      <input id="name-input" type="text">
      <button type="submit">Update Name</button>
    </form>

    <section class="card-actions">
      <button id="message-button" type="button">
        Change Message
      </button>

      <button id="theme-button" type="button">
        Toggle Theme
      </button>
    </section>
  </article>
</main>

<footer>
  <p>JavaScript Practice Assignment</p>
</footer>
```

## JavaScript Requirements

### Requirement 1: Select Page Elements

Use `document.querySelector()` to select:

* The form
* The name input
* The profile name
* The profile message
* The message button
* The theme button
* The profile card or body

Example:

```js
const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("#name-input");
const profileName = document.querySelector("#profile-name");
```

### Requirement 2: Create a Greeting Function

Create a function named `createGreeting`.

The function must:

* Accept one parameter named `name`
* Return a greeting string
* Use a template literal

Example behavior:

```js
createGreeting("Maya");
```

Returns:

```text
Welcome to Maya's profile!
```

### Requirement 3: Update the Profile Name

Create a function named `updateProfileName`.

The function must:

1. Read the value from the name input.
2. Remove unnecessary spaces using `.trim()`.
3. Check whether the input is empty.
4. Display an error message if the input is empty.
5. Update the profile heading if the input is valid.
6. Clear the input after the name is updated.

Example:

```js
function updateProfileName(event) {
  event.preventDefault();

  const enteredName = nameInput.value.trim();

  if (enteredName === "") {
    profileMessage.textContent = "Please enter a name.";
    return;
  }

  profileName.textContent = enteredName;
  profileMessage.textContent = createGreeting(enteredName);
  nameInput.value = "";
}
```

### Requirement 4: Change the Profile Message

Create at least three possible profile messages.

Store them in variables or an array.

Example messages:

```js
const messageOne = "I enjoy building accessible websites.";
const messageTwo = "I am practicing JavaScript functions.";
const messageThree = "I am preparing for a career in technology.";
```

Each time the user selects “Change Message,” display a different message.

Students may use:

* A counter
* A random number
* An array index

### Requirement 5: Toggle the Theme

Create a function named `toggleTheme`.

The function must add or remove a CSS class.

Example:

```js
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}
```

Create the matching CSS:

```css
.dark-theme {
  background-color: #1f2937;
  color: #f9fafb;
}

.dark-theme .profile-card {
  background-color: #374151;
}
```

### Requirement 6: Add Event Listeners

Use event listeners for all interactions.

```js
nameForm.addEventListener("submit", updateProfileName);
messageButton.addEventListener("click", changeProfileMessage);
themeButton.addEventListener("click", toggleTheme);
```

Do not use inline JavaScript such as:

```html
<button onclick="toggleTheme()">Toggle Theme</button>
```

## Required Functions

The completed project must contain at least four student-created functions:

```js
createGreeting()
updateProfileName()
changeProfileMessage()
toggleTheme()
```

At least one function must:

* Accept a parameter
* Return a value

## CSS Requirements

The project must include:

* A centered profile card
* Consistent spacing
* A light theme
* A dark theme
* Button hover styles
* Button focus styles
* A styled form
* Responsive behavior
* A maximum width
* A readable color contrast

## README Requirements

The `README.md` must explain:

* The purpose of the project
* What a function is
* What a parameter is
* What a return value is
* What an event listener does
* How the theme button works
* One challenge encountered

## Suggested Build Process

1. Create the project folder and required files.
2. Build the semantic HTML structure.
3. Style the card, form, and buttons.
4. Connect `script.js` with `defer`.
5. Select the required DOM elements.
6. Write `createGreeting()` and test it in the console.
7. Add the name-update form logic.
8. Add the message-change feature.
9. Add the theme toggle and matching CSS.
10. Attach event listeners.
11. Test empty input, theme switching, and message changes.
12. Complete the README and reflection questions.

## Reflection Questions

Answer the following in complete sentences:

1. What is the difference between a parameter and an argument?
2. Why does the form event use `event.preventDefault()`?
3. What does `.trim()` do?
4. Why does `createGreeting()` return a value?
5. What does `classList.toggle()` do?
6. Why are event listeners preferred over inline JavaScript?
7. What happens when the input is empty?

## Submission Requirements

Submit:

* `index.html`
* `styles.css`
* `script.js`
* `README.md`
* Any images used
* A screenshot of the completed profile card
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

### 3. DOM and Events — 15 Points

* Elements are selected correctly
* Event listeners are used instead of inline JavaScript
* Text content updates correctly
* CSS classes are added and removed correctly
* Form submission is handled properly

### 4. HTML, CSS, and Accessibility — 15 Points

* Semantic HTML
* External CSS
* Responsive design
* Form labels
* Image alternative text
* Keyboard-accessible controls
* Visible focus styles
* Readable content

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
