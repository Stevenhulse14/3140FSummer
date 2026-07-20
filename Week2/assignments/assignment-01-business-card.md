# Assignment 1: Digital Business Card

## Course Project Overview

In this assignment series, you will create four web projects using HTML and CSS:

1. A Business Card
2. A Personal Profile Page
3. A Product or Service Landing Page
4. A Professional Résumé Website

Each assignment introduces new HTML and CSS concepts while reinforcing skills from previous assignments.

### General Requirements

For every assignment:

* Use an external CSS file.
* Use properly indented HTML.
* Include comments that identify the major sections of your code.
* Use semantic HTML whenever appropriate.
* Use descriptive class names.
* Test your page in a web browser.
* Check for spelling, alignment, readability, and consistent spacing.
* Do not use inline CSS unless specifically instructed.
* Do not use tables to create the page layout.

---

## Project Description

Create a digital business card that introduces a professional, student, entrepreneur, or fictional business owner.

The purpose of this assignment is to practice basic HTML structure, CSS styling, spacing, typography, and alignment.

## Learning Objectives

By completing this assignment, students will be able to:

* Create a properly structured HTML document.
* Connect an external CSS stylesheet.
* Use semantic HTML elements.
* Apply colors, fonts, borders, padding, and margins.
* Use Flexbox to align content.
* Explain the difference between content and presentation.
* Apply basic visual hierarchy.

## Important Terms

### HTML

HTML stands for **HyperText Markup Language**. It provides the structure and content of a webpage.

### CSS

CSS stands for **Cascading Style Sheets**. It controls the appearance, spacing, colors, fonts, and layout of a webpage.

### Semantic HTML

Semantic HTML uses elements that describe the meaning of their content.

Examples include:

* `<header>` for introductory content
* `<main>` for the primary content
* `<section>` for a related group of content
* `<address>` for contact information
* `<footer>` for closing information

A `<div>` does not describe the meaning of its content. Use a `<div>` only when no semantic element is appropriate.

### Visual Hierarchy

Visual hierarchy is the arrangement of content according to importance. Larger text, heavier font weights, contrast, and spacing help users understand what to look at first.

### Box Model

Every HTML element is treated like a rectangular box made of:

1. Content
2. Padding
3. Border
4. Margin

Padding creates space inside an element. Margin creates space outside an element.

## Required Content

Your business card must include:

* Full name
* Professional title or role
* Business or organization name
* Email address
* Phone number
* Website or portfolio address
* Short slogan or professional statement
* Profile image, logo, or initials

Students may use fictional information if they do not want to publish personal information.

## Required Semantic Structure

Your HTML should include:

```html
<main>
  <article>
    <header></header>
    <section></section>
    <address></address>
    <footer></footer>
  </article>
</main>
```

The `<article>` element represents the complete business card because the card could stand on its own as an independent piece of content.

## CSS Requirements

Your business card must demonstrate:

* A fixed or maximum width
* A background color
* A border or box shadow
* Rounded corners using `border-radius`
* Internal spacing using `padding`
* External spacing using `margin`
* At least two font sizes
* At least two font weights
* Flexbox for alignment
* A hover effect on at least one link
* A readable color contrast between the text and background

## Design Requirements

Use no more than:

* Three main colors
* Two font families
* Three major font sizes

Your design should have:

* Consistent spacing
* Clear alignment
* A visible focal point
* Readable contact information
* Balanced use of empty space

### Design Principle: Alignment

Related content should line up visually. Avoid placing elements randomly. Text may be left-aligned, centered, or arranged into columns, but the alignment should remain consistent.

### Design Principle: Contrast

Important information should stand out from less important information. Contrast can be created through size, font weight, spacing, or color.

## Suggested Build Process

1. Create a project folder.
2. Add `index.html`.
3. Add `styles.css`.
4. Create the basic HTML document structure.
5. Add the business card content.
6. Replace unnecessary `<div>` elements with semantic elements.
7. Link the CSS file.
8. Style the card’s width, background, and spacing.
9. Use Flexbox to position the image and text.
10. Add link and hover styles.
11. Test the design at different browser widths.
12. Validate and proofread the final project.

## Reflection Questions

Answer the following in complete sentences:

1. Which element creates the main container for your business card?
2. Why is `<address>` appropriate for the contact information?
3. What is the difference between padding and margin?
4. How did you create visual hierarchy?
5. What would happen if your CSS file were not linked correctly?

## Submission Requirements

Submit:

* `index.html`
* `styles.css`
* Any images used
* A screenshot of the completed business card
* Answers to the reflection questions

---

## Evaluation Rubric

Each assignment may be graded using the following categories.

### 1. HTML Structure — 20 Points

* Correct document structure
* Appropriate semantic elements
* Logical heading hierarchy
* Proper indentation
* Meaningful class names

### 2. CSS and Layout — 20 Points

* External stylesheet
* Appropriate use of Flexbox or Grid
* Consistent spacing
* Responsive behavior
* Organized CSS

### 3. Design — 20 Points

* Visual hierarchy
* Alignment
* Contrast
* Repetition
* Proximity
* Readability

### 4. Accessibility — 15 Points

* Alternative text
* Form labels
* Keyboard focus
* Readable contrast
* Meaningful links
* Logical reading order

### 5. Content and Completeness — 15 Points

* All required sections included
* Accurate terminology
* Complete written content
* Professional presentation
* Reflection questions completed

### 6. Code Quality — 10 Points

* Valid HTML and CSS
* No unnecessary inline styling
* Minimal unnecessary code
* Helpful comments
* Consistent formatting

**Total: 100 Points**
