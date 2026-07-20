# Assignment 4: Professional Résumé Website

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

Create a professional résumé as a responsive webpage.

This assignment combines semantic HTML, typography, responsive layout, accessibility, and professional content organization.

The final résumé should be suitable for sharing with a potential employer.

Students may use fictional information when necessary, but the organization and formatting should remain realistic.

## Learning Objectives

By completing this assignment, students will be able to:

* Organize professional information using semantic HTML.
* Choose appropriate elements for dates, contact information, lists, and sections.
* Create a responsive one-column or two-column layout.
* Apply professional typography.
* Design for both screens and printing.
* Use CSS selectors efficiently.
* Explain specificity, inheritance, and the cascade.
* Create an accessible and readable résumé.

## Important Terms

### Cascade

The cascade is the process browsers use to determine which CSS rule should be applied when multiple rules target the same element.

### Specificity

Specificity determines which CSS selector has greater priority.

In general:

* Element selectors have lower specificity.
* Class selectors have greater specificity.
* ID selectors have very high specificity.
* Inline styles override most stylesheet rules.

Avoid using overly specific selectors when a reusable class would work.

### Inheritance

Inheritance occurs when some CSS properties pass from a parent element to its children.

Typography properties such as `font-family` and `color` often inherit.

### Chronological Order

Chronological order arranges information according to time.

Résumés commonly use reverse chronological order, placing the most recent position first.

### Responsive Layout

A responsive résumé should remain readable on both wide and narrow screens. A two-column desktop layout may become a one-column mobile layout.

### Print Stylesheet

Print styles change how a webpage appears when printed or saved as a PDF.

Example:

```css
@media print {
  nav,
  .download-button {
    display: none;
  }

  body {
    font-size: 11pt;
  }
}
```

## Required Résumé Sections

### Header

Include:

* Full name
* Professional title
* City and state
* Email address
* Phone number
* Portfolio, GitHub, or LinkedIn link

Use `<address>` for the contact information.

### Professional Summary

Write two to four sentences explaining:

* Your professional identity
* Your strongest skills
* Your experience or educational focus
* The type of opportunity you are seeking

### Skills

Organize technical and professional skills into categories.

Possible categories include:

* Programming Languages
* Web Technologies
* Software and Tools
* Communication
* Leadership
* Languages

### Work Experience

Include at least two positions.

Each position must include:

* Job title
* Organization
* Location
* Start and end dates
* Three to five accomplishment statements

Use action verbs such as:

* Developed
* Designed
* Managed
* Improved
* Created
* Implemented
* Supported
* Coordinated
* Analyzed

Avoid weak statements such as “Responsible for helping customers.”

Prefer achievement-oriented statements such as:

“Supported more than 30 customer requests per shift while maintaining accurate service records.”

### Education

Include:

* Degree or certificate
* School
* Location
* Graduation date or expected graduation date
* Optional relevant coursework

### Projects

Include at least two projects.

Each project should explain:

* Project name
* Technologies used
* Purpose
* Student contribution
* Result or completed feature

### Optional Section

Choose at least one:

* Certifications
* Awards
* Volunteer Work
* Military Experience
* Organizations
* Publications
* Languages

## Semantic HTML Requirements

Use the following elements appropriately:

```html
<header>
<main>
<section>
<article>
<address>
<ul>
<time>
<footer>
```

Use `<time>` for dates.

Example:

```html
<time datetime="2025-01">January 2025</time>
```

The `datetime` attribute provides a machine-readable version of the date.

Each position or project may be placed inside an `<article>` because it represents a complete entry.

## Heading Requirements

Use a logical document hierarchy:

```html
<h1>Full Name</h1>
<h2>Professional Summary</h2>
<h2>Experience</h2>
<h3>Software Developer</h3>
```

Do not skip from `<h1>` directly to `<h4>` to make text appear smaller. Use CSS to control visual size.

## CSS Requirements

Your résumé must include:

* CSS custom properties
* A readable font system
* Consistent heading styles
* A centered page container
* A desktop layout using Grid or Flexbox
* A mobile layout
* Appropriate line height
* Consistent spacing between sections
* Styled links
* Hover and focus-visible states
* A print media query
* Rules that prevent unnecessary content from printing
* A design that works in grayscale
* A maximum content width

## Recommended Layout

### Desktop

Use two columns:

* Main column: summary, experience, and projects
* Side column: contact information, skills, education, and certifications

### Mobile

Change the résumé to one column.

The content should remain in a logical reading order even without CSS.

This is important because HTML should communicate the correct structure before visual styling is added.

## Accessibility Requirements

* Use descriptive link text.
* Maintain sufficient color contrast.
* Do not communicate information through color alone.
* Use correct heading levels.
* Do not place important résumé text inside images.
* Make links visible when printed.
* Test keyboard focus.
* Use semantic elements instead of styling every section with generic `<div>` elements.

## Professional Writing Requirements

Each experience bullet should:

1. Begin with an action verb.
2. Describe a task, contribution, or result.
3. Include specific tools, numbers, or outcomes when possible.
4. Remain concise.
5. Use consistent verb tense.

Use present tense for a current position and past tense for previous positions.

## Résumé Design Principles

### Readability

The résumé should be easy to scan. Employers should be able to quickly identify:

* Name
* Professional title
* Skills
* Most recent experience
* Education

### Consistency

Maintain consistent:

* Date formats
* Bullet styles
* Heading sizes
* Spacing
* Capitalization
* Job-title formatting

### Restraint

A professional résumé should not rely on excessive effects. Avoid:

* Flashing animations
* Large decorative images
* Too many colors
* Hard-to-read fonts
* Excessive shadows
* Extremely small text

## Suggested Build Process

1. Collect your résumé information.
2. Organize information into sections.
3. Write accomplishment-focused experience bullets.
4. Create the semantic HTML structure.
5. Verify the heading hierarchy.
6. Add machine-readable `<time>` elements.
7. Create the mobile layout.
8. Add the desktop grid layout.
9. Apply professional typography.
10. Add link, hover, and focus styles.
11. Create print styles.
12. Print-preview the résumé.
13. Test the résumé in grayscale.
14. Check spelling, capitalization, and date consistency.
15. Validate the HTML and CSS.

## Required Print Features

When printed or saved as a PDF:

* Navigation should not appear.
* Interactive buttons should not appear.
* The background should not waste ink.
* Text should fit within the page.
* Full web addresses should remain understandable.
* Sections should not be cut off unnecessarily.

You may use:

```css
break-inside: avoid;
```

to reduce awkward page breaks inside experience entries.

## Reflection Questions

1. Why is semantic HTML important for a résumé?
2. Why should the HTML reading order make sense without CSS?
3. What is the difference between inheritance and specificity?
4. How does your résumé change on mobile devices?
5. What changes when the résumé is printed?
6. Why did you choose your font sizes and spacing?
7. Which section has the strongest visual emphasis?
8. How did you improve the quality of your experience statements?

## Submission Requirements

Submit:

* `index.html`
* `styles.css`
* Any necessary assets
* A desktop screenshot
* A mobile screenshot
* A PDF created through the browser’s print feature
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

---

## Final Assignment Progression

The four projects increase in complexity:

* **Business Card:** Basic structure, spacing, and visual hierarchy
* **Profile Page:** Full-page organization, navigation, and responsive sections
* **Landing Page:** User experience, reusable components, forms, and calls-to-action
* **Résumé Website:** Professional content, semantic structure, responsive layouts, and print design

By the end of the series, students should be able to create structured, accessible, responsive, and visually organized webpages using HTML and CSS.
