# Assignment 3: Product or Service Landing Page

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

Create a landing page for a fictional product, service, school program, community event, mobile application, or small business.

A landing page is designed to present information and encourage the visitor to complete a specific action.

Examples of actions include:

* Registering for a class
* Requesting more information
* Purchasing a product
* Scheduling an appointment
* Downloading an application
* Joining a mailing list

## Learning Objectives

By completing this assignment, students will be able to:

* Design a page around a clear user goal.
* Build a semantic landing page.
* Create a hero section.
* Use CSS Grid and Flexbox together.
* Create reusable components.
* Style a form.
* Explain calls-to-action and user experience.
* Apply responsive design techniques.
* Use CSS custom properties.

## Important Terms

### Landing Page

A landing page is a webpage designed around one primary purpose or action.

### Hero Section

A hero section is the large introductory area near the top of a webpage. It commonly includes a heading, description, image, and call-to-action button.

### Call-to-Action

A call-to-action, or CTA, tells the user what action to take.

Examples include:

* Sign Up
* Start Learning
* Request a Quote
* View Plans
* Join the Event

### User Experience

User experience, often abbreviated as UX, describes how easy, clear, and satisfying it is for a person to use a product or website.

### Component

A component is a reusable part of a webpage, such as a button, card, navigation bar, or form field.

### CSS Custom Property

A CSS custom property is a reusable variable.

Example:

```css
:root {
  --primary-color: #2457d6;
  --text-color: #1f2937;
  --surface-color: #ffffff;
  --section-spacing: 5rem;
}
```

The property may then be reused:

```css
button {
  background-color: var(--primary-color);
}
```

## Required Page Sections

### Site Header

Include:

* Logo or business name
* Navigation
* Primary CTA link or button

### Hero Section

Include:

* One clear `<h1>`
* A short value statement
* Supporting text
* Primary CTA
* Product, service, or event image

### Benefits Section

Include at least three benefits.

Each benefit should explain how the product or service helps the user. Do not create a list that only names features.

Example:

* Feature: Cloud storage
* Benefit: Access your files from different devices

### How It Works Section

Explain the process in at least three steps.

Use an ordered list when the order matters.

### Testimonial or Review Section

Include at least two fictional customer testimonials.

Each testimonial should use an appropriate semantic structure such as `<blockquote>`.

### Pricing, Registration, or Service Options

Include at least two options.

Each option should clearly display:

* Name
* Price or availability
* Included features
* CTA

### Contact or Signup Form

Include:

* Name field
* Email field
* One select menu or text area
* Submit button
* Proper `<label>` elements

### Footer

Include:

* Business name
* Contact link
* Navigation links
* Copyright information

## Semantic HTML Requirements

Your project should use:

```html
<header>
<nav>
<main>
<section>
<article>
<ol>
<blockquote>
<form>
<label>
<footer>
```

Use `<button>` for actions and `<a>` for navigation.

Do not create a link when the element is expected to submit a form.

## Form Requirements

Every input must have a connected label.

Correct:

```html
<label for="email">Email address</label>
<input type="email" id="email" name="email">
```

Incorrect:

```html
<p>Email</p>
<input type="text">
```

Use the correct input type whenever possible:

* `type="text"` for names
* `type="email"` for email addresses
* `type="tel"` for phone numbers
* `type="number"` for numbers

## CSS Requirements

Your project must include:

* CSS custom properties
* Flexbox
* CSS Grid
* A responsive navigation layout
* A hero layout
* Reusable card classes
* Primary and secondary button styles
* Form styling
* Hover styles
* Focus-visible styles
* At least two media queries
* Consistent section spacing
* A `max-width` content container
* A mobile-first or desktop-first layout strategy

## Design Concepts

### Whitespace

Whitespace is the unoccupied space between elements. Whitespace improves readability and helps separate sections.

Whitespace does not have to be white.

### Consistency

Buttons that perform similar actions should look similar. Cards should use related spacing, borders, and heading styles.

### Affordance

Affordance means that an element’s appearance suggests how it should be used. A button should look clickable. A text field should look editable.

### User Flow

User flow is the path a visitor follows through a website. The page should guide the visitor from introduction to benefits and finally to the main CTA.

## Content and Design Planning

Before coding, answer:

1. Who is the intended audience?
2. What problem does the product or service solve?
3. What is the primary action visitors should take?
4. What information must visitors see before completing that action?
5. What design choices will make the CTA easy to find?

## Suggested Build Process

1. Select a product, service, event, or program.
2. Identify the target audience.
3. Write the primary CTA.
4. Create a simple page wireframe.
5. Build the semantic HTML structure.
6. Add the written content.
7. Create CSS custom properties.
8. Build the mobile layout.
9. Add Flexbox and Grid layouts.
10. Style the cards, buttons, and form.
11. Add responsive breakpoints.
12. Test links, fields, labels, and buttons.
13. Review the page’s visual hierarchy.
14. Confirm that the CTA remains easy to find.

## Reflection Questions

1. What is the primary purpose of your landing page?
2. What is the difference between a feature and a benefit?
3. Why should a form input have a label?
4. When should you use a button instead of a link?
5. How did you guide the user toward the primary CTA?
6. Which CSS custom properties did you create?
7. How does your layout change at different screen sizes?

## Submission Requirements

Submit:

* `index.html`
* `styles.css`
* Image folder
* Planning answers
* Desktop screenshot
* Mobile screenshot
* Reflection answers

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
