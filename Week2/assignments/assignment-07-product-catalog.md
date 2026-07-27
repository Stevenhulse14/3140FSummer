# Assignment 7: Product Catalog

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

Create a product catalog using an array of JavaScript objects.

The product information must be stored in JavaScript rather than written directly into the HTML.

JavaScript will create and display the product cards.

Users must be able to:

* View all products
* Search by product name
* Filter by category
* Sort by price
* View an empty state when no products match

This assignment introduces:

* Objects
* Object properties
* Arrays of objects
* DOM creation
* Rendering data
* Search
* Filtering
* Sorting
* Callback functions
* Reusable functions

## Learning Objectives

By completing this assignment, students will be able to:

* Create JavaScript objects.
* Store objects inside an array.
* Access object properties.
* Pass objects into functions.
* Render objects as HTML content.
* Search an array of objects.
* Filter products by category.
* Sort products by price.
* Build reusable product-card components with JavaScript.
* Separate data from presentation.

## Important Terms

### Object

An object stores related information using property-and-value pairs.

```js
const student = {
  name: "Jordan",
  major: "Computer Science",
  graduationYear: 2027
};
```

### Array of Objects

An array of objects stores a list of related records.

```js
const products = [
  { id: 1, name: "Wireless Keyboard", price: 39.99 },
  { id: 2, name: "Canvas Backpack", price: 54.99 }
];
```

### Dot Notation

Dot notation accesses an object property by name.

```js
product.name
product.price
```

### Filter

`.filter()` returns a new array containing only the items that match a condition.

### Sort

Sorting rearranges items according to a rule, such as price or name.

Do not sort the original product array directly. Create a copy first.

## Product Object Structure

Each product object must include:

```js
{
  id: 1,
  name: "Wireless Keyboard",
  price: 39.99,
  category: "Electronics",
  description: "A compact wireless keyboard.",
  image: "images/keyboard.png",
  inStock: true
}
```

## Product Data Requirements

Create an array named `products`.

The array must contain at least eight product objects.

```js
const products = [
  {
    id: 1,
    name: "Wireless Keyboard",
    price: 39.99,
    category: "Electronics",
    description: "A compact keyboard for work and study.",
    image: "images/keyboard.png",
    inStock: true
  },
  {
    id: 2,
    name: "Canvas Backpack",
    price: 54.99,
    category: "Accessories",
    description: "A durable backpack with multiple compartments.",
    image: "images/backpack.png",
    inStock: false
  }
];
```

The catalog must contain at least three categories.

## Required Interface

The page must include:

* A semantic header
* A search input
* A category select menu
* A sort select menu
* A results-count message
* A product grid
* An empty-state message
* A footer

Suggested controls:

```html
<section class="catalog-controls" aria-labelledby="controls-heading">
  <h2 id="controls-heading">Find Products</h2>

  <label for="search-input">Search products</label>
  <input id="search-input" type="search">

  <label for="category-filter">Filter by category</label>
  <select id="category-filter">
    <option value="all">All Categories</option>
    <option value="Electronics">Electronics</option>
    <option value="Accessories">Accessories</option>
    <option value="Home">Home</option>
  </select>

  <label for="sort-select">Sort products</label>
  <select id="sort-select">
    <option value="default">Default Order</option>
    <option value="price-low">Price: Low to High</option>
    <option value="price-high">Price: High to Low</option>
    <option value="name">Name: A to Z</option>
  </select>
</section>

<section aria-labelledby="products-heading">
  <h2 id="products-heading">Products</h2>
  <p id="results-count"></p>
  <div id="product-grid"></div>
</section>
```

## Required Functions

### Function 1: Format a Price

Create:

```js
function formatPrice(price) {
}
```

The function must return a formatted U.S. currency value.

Example:

```js
function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}
```

Example output:

```text
$39.99
```

### Function 2: Create a Product Card

Create:

```js
function createProductCard(product) {
}
```

This function must:

* Accept one product object
* Create an `<article>`
* Display the product image
* Display the product name
* Display the category
* Display the description
* Display the formatted price
* Display whether the product is in stock
* Return the completed article element

Example property access:

```js
product.name
product.price
product.category
product.inStock
```

The product card must use semantic HTML.

Suggested structure:

```html
<article class="product-card">
  <img>
  <div>
    <p class="product-category"></p>
    <h3></h3>
    <p class="product-description"></p>
    <p class="product-price"></p>
    <p class="product-stock"></p>
  </div>
</article>
```

### Function 3: Display Products

Create:

```js
function displayProducts(productArray) {
}
```

This function must:

1. Clear the product grid.
2. Check whether the array is empty.
3. Display an empty-state message when necessary.
4. Loop through the product array.
5. Call `createProductCard()` for each product.
6. Add each card to the grid.
7. Update the results count.

### Function 4: Search Products

Create:

```js
function searchProducts(productArray, searchTerm) {
}
```

The function must return products whose names include the search text.

Search should not be case-sensitive.

Example:

```js
function searchProducts(productArray, searchTerm) {
  const normalizedSearch = searchTerm.toLowerCase().trim();

  return productArray.filter(function (product) {
    return product.name.toLowerCase().includes(normalizedSearch);
  });
}
```

### Function 5: Filter by Category

Create:

```js
function filterByCategory(productArray, selectedCategory) {
}
```

The function must:

* Return all products when the selected category is `"all"`
* Otherwise, return only products from the selected category

### Function 6: Sort Products

Create:

```js
function sortProducts(productArray, sortOption) {
}
```

The function must support:

* Lowest price first
* Highest price first
* Alphabetical order

Do not directly sort the original array.

Create a copy:

```js
const productsCopy = [...productArray];
```

Then sort the copy.

### Function 7: Apply Catalog Controls

Create:

```js
function updateCatalog() {
}
```

This function must:

1. Begin with the complete `products` array.
2. Read the search input.
3. Read the selected category.
4. Read the sort option.
5. Search the products.
6. Filter the products.
7. Sort the products.
8. Display the final results.

This function should call the other functions rather than repeating their logic.

## Required Event Listeners

The application must update when:

* The user types into the search input
* The category changes
* The sort option changes

Example:

```js
searchInput.addEventListener("input", updateCatalog);
categoryFilter.addEventListener("change", updateCatalog);
sortSelect.addEventListener("change", updateCatalog);
```

## Object Concepts Students Must Demonstrate

The project must use:

* At least eight objects
* An array of objects
* Dot notation
* A Boolean property
* A numerical property
* A string property
* An object passed into a function

Example:

```js
if (product.inStock) {
  stockMessage.textContent = "In Stock";
} else {
  stockMessage.textContent = "Out of Stock";
}
```

## Accessibility Requirements

* Product images must have meaningful `alt` text.
* Form controls must have labels.
* The results count should be readable by assistive technology.
* Products must use headings in a logical order.
* Stock information must use written text.
* Keyboard focus must remain visible.

## CSS Requirements

The design must include:

* A responsive product grid
* Consistent product cards
* Product image styling
* A control section
* Hover and focus states
* An empty-state design
* Clear in-stock and out-of-stock text
* Mobile, tablet, and desktop layouts

## README Requirements

Explain:

* What an object is
* What an array of objects is
* Why product data is stored in JavaScript
* How a product card is created
* How search works
* How filtering works
* How sorting works
* Why the original product array should not be sorted directly

## Suggested Build Process

1. Create the project folder and required files.
2. Build the header, controls, product grid, and footer.
3. Define at least eight product objects.
4. Write `formatPrice()` and `createProductCard()`.
5. Write `displayProducts()` and render the full catalog.
6. Add search, then category filtering, then sorting.
7. Connect all controls through `updateCatalog()`.
8. Test empty results and accessibility.
9. Complete the README and reflection questions.

## Reflection Questions

Answer the following in complete sentences:

1. What is the difference between an array and an object?
2. What does `product.name` mean?
3. Why is each product stored as an object?
4. Why does `createProductCard()` accept a product parameter?
5. What does `.filter()` return?
6. What does `.includes()` do?
7. Why is the search text converted to lowercase?
8. Why is a copy of the array sorted?
9. What happens when no products match?

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
* Search, filter, and sort behave correctly
* Results are displayed correctly
* The application handles empty states

### 2. Functions and Code Organization — 20 Points

* Required functions are present
* Functions have clear purposes
* Parameters are used appropriately
* Return values are used appropriately
* Code is not unnecessarily duplicated
* Variable and function names are descriptive

### 3. Arrays and Objects — 15 Points

* Correct object usage
* Correct array-of-objects usage
* Appropriate array methods
* Correct property access
* Original product data is not mutated by sorting

### 4. HTML, CSS, and Accessibility — 15 Points

* Semantic HTML
* External CSS
* Responsive design
* Form labels
* Image alternative text
* Keyboard-accessible controls
* Visible focus styles
* Stock information communicated with text

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
