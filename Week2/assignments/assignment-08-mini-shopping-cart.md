# Assignment 8: Mini Shopping Cart

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

Create a small shopping application that allows users to add products to a cart, update quantities, remove items, and view the order total.

This assignment combines all major beginner JavaScript concepts:

* Variables
* Functions
* Arrays
* Objects
* Arrays of objects
* Event listeners
* DOM manipulation
* Array methods
* Calculations
* Conditions
* Re-rendering the interface

The project does not require a backend, database, user account, or real payment information.

## Learning Objectives

By completing this assignment, students will be able to:

* Store products as objects.
* Store cart items in an array.
* Add objects to an array.
* Find an object inside an array.
* Update object properties.
* Remove objects from an array.
* Calculate totals.
* Create reusable functions.
* Render changing data.
* Handle multiple user interactions.
* Explain the flow of a shopping-cart application.

## Important Terms

### Array of Objects

Products and cart items are stored as objects inside arrays so related information stays together.

### State

State is the current data used by the application. In this project, the `cart` array is the application state.

When state changes, the interface should be rendered again.

### Event Delegation

Event delegation places one listener on a parent element and responds to clicks on child elements.

```js
productGrid.addEventListener("click", function (event) {
  if (!event.target.matches("[data-product-id]")) {
    return;
  }

  const productId = Number(event.target.dataset.productId);
  addToCart(productId);
});
```

### Array Methods

Methods such as `.find()`, `.findIndex()`, `.push()`, `.splice()`, and `.reduce()` help search, update, and calculate cart data.

## Required Product Data

Create at least six product objects.

```js
const products = [
  {
    id: 1,
    name: "Laptop Stand",
    price: 34.99,
    category: "Office",
    image: "images/laptop-stand.png"
  },
  {
    id: 2,
    name: "USB-C Cable",
    price: 12.99,
    category: "Electronics",
    image: "images/usb-c-cable.png"
  }
];
```

## Cart Data

Create an empty array:

```js
const cart = [];
```

Each cart item should contain:

```js
{
  id: 1,
  name: "Laptop Stand",
  price: 34.99,
  quantity: 2
}
```

## Required Interface

The application must include:

* A page header
* A product section
* A cart section
* Product cards
* Add-to-cart buttons
* Cart item list
* Quantity controls
* Remove buttons
* Cart item count
* Cart subtotal
* Tax
* Final total
* Empty-cart message
* Clear-cart button
* Simulated checkout button

Suggested page structure:

```html
<main>
  <section aria-labelledby="products-heading">
    <h2 id="products-heading">Products</h2>
    <div id="product-grid"></div>
  </section>

  <aside class="shopping-cart" aria-labelledby="cart-heading">
    <h2 id="cart-heading">Shopping Cart</h2>

    <p>
      Items:
      <span id="cart-count">0</span>
    </p>

    <div id="cart-items" aria-live="polite"></div>

    <section class="cart-summary">
      <p>Subtotal: <span id="subtotal">$0.00</span></p>
      <p>Tax: <span id="tax">$0.00</span></p>
      <p>Total: <span id="total">$0.00</span></p>
    </section>

    <button id="clear-cart-button" type="button">
      Clear Cart
    </button>

    <button id="checkout-button" type="button">
      Complete Simulated Checkout
    </button>
  </aside>
</main>
```

## Required Functions

### Function 1: Display Products

Create:

```js
function displayProducts() {
}
```

This function must:

* Loop through the products
* Create product cards
* Add one “Add to Cart” button to each card
* Store the product ID in the button

One option is to use a data attribute:

```js
button.dataset.productId = product.id;
```

Resulting HTML:

```html
<button data-product-id="1">Add to Cart</button>
```

### Function 2: Find a Product

Create:

```js
function findProductById(productId) {
}
```

The function must return the matching product.

Example:

```js
function findProductById(productId) {
  return products.find(function (product) {
    return product.id === productId;
  });
}
```

### Function 3: Add an Item to the Cart

Create:

```js
function addToCart(productId) {
}
```

This function must:

1. Find the product.
2. Check whether the product already exists in the cart.
3. Increase the quantity when it already exists.
4. Add a new cart object when it does not exist.
5. Update the cart display.

Example logic:

```js
const existingCartItem = cart.find(function (item) {
  return item.id === productId;
});

if (existingCartItem) {
  existingCartItem.quantity += 1;
} else {
  cart.push({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1
  });
}
```

### Function 4: Display the Cart

Create:

```js
function displayCart() {
}
```

This function must:

* Clear the existing cart display
* Show an empty-cart message when necessary
* Create a cart entry for each item
* Display name, price, quantity, and line total
* Add increase, decrease, and remove buttons
* Call the summary functions

Line total formula:

```js
const lineTotal = item.price * item.quantity;
```

### Function 5: Increase Quantity

Create:

```js
function increaseQuantity(productId) {
}
```

The function must:

* Find the cart item
* Increase its quantity by one
* Refresh the cart display

### Function 6: Decrease Quantity

Create:

```js
function decreaseQuantity(productId) {
}
```

The function must:

* Find the cart item
* Decrease the quantity by one
* Remove the item if the quantity becomes zero
* Refresh the cart display

### Function 7: Remove an Item

Create:

```js
function removeFromCart(productId) {
}
```

Students may use `.findIndex()` and `.splice()`:

```js
const itemIndex = cart.findIndex(function (item) {
  return item.id === productId;
});

if (itemIndex !== -1) {
  cart.splice(itemIndex, 1);
}
```

### Function 8: Calculate the Cart Count

Create:

```js
function calculateCartCount() {
}
```

The function must return the total number of units.

For example, quantities of `2`, `1`, and `3` should produce a cart count of `6`.

### Function 9: Calculate the Subtotal

Create:

```js
function calculateSubtotal() {
}
```

The function must return the combined total before tax.

Example:

```js
function calculateSubtotal() {
  return cart.reduce(function (total, item) {
    return total + item.price * item.quantity;
  }, 0);
}
```

Students who use `.reduce()` must explain:

* The accumulator
* The current item
* The starting value

A loop may be used instead.

### Function 10: Calculate Tax

Use a tax rate of 8.875% for this classroom project.

```js
const TAX_RATE = 0.08875;
```

Create:

```js
function calculateTax(subtotal) {
  return subtotal * TAX_RATE;
}
```

This is a classroom calculation and does not represent every real-world tax rule.

### Function 11: Update the Cart Summary

Create:

```js
function updateCartSummary() {
}
```

The function must display:

* Item count
* Subtotal
* Tax
* Final total

Final total:

```js
const total = subtotal + tax;
```

All money must be formatted as U.S. currency.

### Function 12: Clear the Cart

Create:

```js
function clearCart() {
}
```

The function must:

* Remove all cart items
* Refresh the display
* Restore the empty-cart message

### Function 13: Simulated Checkout

Create:

```js
function completeCheckout() {
}
```

The function must:

* Prevent checkout when the cart is empty
* Display an order summary
* Display a success message
* Clear the cart after the simulated order

The project must not request or store real credit-card information.

## Required Array Methods

The completed application must use at least four of the following:

* `.forEach()`
* `.find()`
* `.findIndex()`
* `.push()`
* `.splice()`
* `.reduce()`
* `.filter()`

Students must explain each method they use.

## Required Object Skills

Students must demonstrate:

* Creating product objects
* Creating cart-item objects
* Reading object properties
* Updating the `quantity` property
* Passing an object or object ID into a function
* Storing objects inside arrays

## Event Handling Requirement

Students may attach individual listeners to buttons or use event delegation.

Students who use event delegation must explain:

* Why the listener is placed on the parent
* What `event.target` represents
* What a data attribute stores

## Application Rules

The project must follow these rules:

* A product added twice should have quantity `2`.
* Decreasing quantity below `1` should remove the product.
* Removing a product should immediately update totals.
* Clearing the cart should reset every total.
* Checkout should not work when the cart is empty.
* Prices must not display more than two decimal places.
* The cart count must represent total quantity, not only unique products.
* The page must not refresh during cart interactions.

## Accessibility Requirements

* Every product image must have alternative text.
* Buttons must use descriptive labels.
* Quantity buttons should identify the product.

Example:

```html
<button aria-label="Increase Laptop Stand quantity">
  +
</button>
```

* Cart updates should appear in a region using `aria-live="polite"`.
* Focus styles must be visible.
* Color must not be the only method used to communicate information.

## CSS Requirements

The application must include:

* A responsive product grid
* A visually separate cart area
* Consistent cards
* Styled quantity controls
* A clearly visible order total
* Button hover and focus states
* Mobile and desktop layouts
* An empty-cart style
* A checkout success-message style

## README Requirements

The `README.md` must explain:

* The purpose of the application
* The difference between the `products` array and the `cart` array
* How an item is added to the cart
* How duplicate items are handled
* How quantities are updated
* How the subtotal is calculated
* How tax is calculated
* How an item is removed
* Which array methods were used
* One major bug and how it was solved

## Suggested Build Process

1. Create the project folder and required files.
2. Build the product grid and cart layout.
3. Define the product data and empty cart array.
4. Render products with “Add to Cart” buttons.
5. Implement `addToCart()` and `displayCart()`.
6. Add quantity and remove controls.
7. Calculate count, subtotal, tax, and total.
8. Add clear-cart and simulated checkout.
9. Test empty cart, duplicate items, and quantity rules.
10. Complete the README and reflection questions.

## Reflection Questions

Answer the following in complete sentences:

1. Why are products represented as objects?
2. Why is the cart an array?
3. What does `.find()` return?
4. How does the application determine whether an item is already in the cart?
5. Why does the application store quantity on the cart item?
6. What is the difference between a line total and the subtotal?
7. What happens when quantity reaches zero?
8. Why should the cart be displayed again after data changes?
9. What is event delegation?
10. What is the difference between a product ID and an array index?
11. Why should real payment information not be collected in this project?
12. Trace one product from the “Add to Cart” button to the final total.

## Submission Requirements

Submit:

* `index.html`
* `styles.css`
* `script.js`
* `README.md`
* Image folder
* Desktop screenshot
* Mobile screenshot
* Answers to the reflection questions

---

## Evaluation Rubric

### 1. JavaScript Functionality — 35 Points

* Required interactions work
* Functions perform the correct tasks
* Cart quantity and totals update correctly
* Inputs and empty states are handled
* Simulated checkout works as required

### 2. Functions and Code Organization — 20 Points

* Required functions are present
* Functions have clear purposes
* Parameters are used appropriately
* Return values are used appropriately
* Code is not unnecessarily duplicated
* Variable and function names are descriptive

### 3. Arrays and Objects — 15 Points

* Correct product and cart object usage
* Appropriate array methods
* Correct property access and quantity updates
* Correct add, remove, and recalculate behavior

### 4. HTML, CSS, and Accessibility — 15 Points

* Semantic HTML
* External CSS
* Responsive design
* Form labels and descriptive button text
* Image alternative text
* Keyboard-accessible controls
* Visible focus styles
* `aria-live` used for cart updates

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

---

## Final JavaScript Assignment Progression

The four projects increase in complexity:

* **Interactive Profile Card:** Variables, functions, events, and DOM updates
* **Student Grade Analyzer:** Arrays, loops, validation, and calculations
* **Product Catalog:** Objects, rendering data, search, filtering, and sorting
* **Mini Shopping Cart:** Application state, array methods, totals, and multiple interactions

By the end of the series, students should be able to store data, respond to events, update the page with JavaScript, and explain how their functions work.

## Definition of Done

An assignment is complete when:

* The HTML structure is present.
* The CSS is connected.
* The JavaScript is connected.
* The required interactions work.
* Functions are used correctly.
* Arrays or objects are used where required.
* Invalid input is handled.
* Empty states are handled.
* The page works at multiple screen sizes.
* The README is complete.
* Reflection questions are answered.
* The student can explain the code.
