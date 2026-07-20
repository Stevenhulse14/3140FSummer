# Assignment 2: Personal Profile and About Me Page

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

Create a one-page personal profile website. The website should introduce the student and organize information into meaningful sections.

This assignment expands beyond a small card and teaches students how to structure an entire webpage.

Students may create the page about themselves, a fictional character, a historical figure, or a professional persona.

## Learning Objectives

By completing this assignment, students will be able to:

* Organize a full webpage using semantic HTML.
* Create navigation links.
* Use headings in the correct order.
* Build reusable CSS classes.
* Use Flexbox or CSS Grid.
* Style lists, images, buttons, and links.
* Explain responsive web design.
* Apply repetition and proximity to a design.

## Important Terms

### Document Outline

A document outline is the organization of headings and sections on a webpage.

A page should normally begin with one `<h1>`. Subsections should use `<h2>`, and smaller sections within those areas may use `<h3>`.

Do not select headings based only on their default size.

### Navigation

The `<nav>` element contains major navigation links that help users move through the webpage or website.

### Section

A `<section>` groups related content. A section should normally have a heading.

### Article

An `<article>` contains content that could stand independently, such as a profile, blog post, news story, or product review.

### Responsive Design

Responsive design allows a webpage to adjust to different screen sizes, including phones, tablets, and desktop computers.

### Proximity

Proximity means placing related information close together and separating unrelated information with space.

### Repetition

Repetition means reusing visual choices such as colors, font styles, button shapes, and spacing. Repetition makes a design feel consistent.

## Required Page Sections

### Header

Include:

* The person’s name
* A short title or description
* A navigation menu

### About Section

Include:

* A profile image
* A two-paragraph introduction
* A short personal or professional goal

### Skills Section

Include:

* At least six skills
* An unordered list or styled skill cards
* A short explanation of two selected skills

### Projects or Interests Section

Include at least three projects, hobbies, interests, or accomplishments.

Each item should have:

* A heading
* A short description
* An image, icon, or placeholder
* A link or button

### Contact Section

Include:

* Email
* Optional social media or portfolio links
* A simple contact call-to-action

### Footer

Include:

* The student’s name
* The current year
* A short closing statement

## Required Semantic Structure

Use the following elements appropriately:

```html
<header>
<nav>
<main>
<section>
<article>
<figure>
<figcaption>
<footer>
```

You may use `<div>` elements inside these sections when you need a generic styling container.

## Navigation Requirement

The navigation links should move the user to sections on the same page.

Example:

```html
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
```

The matching section must contain the correct `id`.

Example:

```html
<section id="about">
```

## CSS Requirements

Your webpage must include:

* A consistent color palette
* A readable font system
* Flexbox or CSS Grid
* Styled navigation links
* Styled project or interest cards
* Consistent spacing between sections
* A reusable button class
* Image sizing using CSS
* At least one media query
* A layout change for smaller screens
* Hover and focus styles for interactive elements

## Accessibility Requirements

* Every meaningful image must have descriptive `alt` text.
* Decorative images should use `alt=""`.
* Links must use meaningful text.
* Do not use “click here” as the only link description.
* Text must remain readable against the background.
* Keyboard users must be able to identify focused links and buttons.
* The page must use a logical heading order.

## Design Challenge

Choose one section and use CSS Grid to arrange its content.

For example:

```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
```

Then use a media query to change the layout on smaller screens.

## Suggested Build Process

1. Plan the page sections on paper.
2. Create the semantic HTML structure.
3. Add headings and written content.
4. Add navigation links and matching section IDs.
5. Add images with appropriate alternative text.
6. Create reusable classes for buttons and cards.
7. Apply typography and colors.
8. Build the main layout using Flexbox or Grid.
9. Add hover and focus states.
10. Add a media query.
11. Test the page with keyboard navigation.
12. Test the page at mobile and desktop widths.

## Reflection Questions

1. Why should a webpage normally have only one `<h1>`?
2. What is the purpose of the `<nav>` element?
3. When would you use a `<section>` instead of a `<div>`?
4. How does your media query change the page?
5. How did repetition improve your design?
6. What accessibility feature did you include?

## Submission Requirements

Submit:

* `index.html`
* `styles.css`
* Image folder
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
