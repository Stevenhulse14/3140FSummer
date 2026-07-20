# Final Group Project: Full-Stack E-Commerce Application

## Project Overview

For the final project, each team will design, develop, test, and present a complete full-stack e-commerce application.

**Expected achievement level: S-Tier (Tier 4).**

Teams with AI-assisted development capacity are expected to aim for an exceptional, professional-quality platform—not a minimum viable product. Lower tiers describe the foundations you must complete along the way. A polished Tier 2 or Tier 3 project can still succeed if quality is high, but the **target requirement for this course is S-Tier**.

The project must allow customers to browse products, view product information, add products to a shopping cart, and complete a simulated checkout process. S-Tier projects must also include authentication, order history, inventory management, administrative tools, payment processing (test mode), analytics, testing, deployment, and other professional features described below.

This project is not graded only on appearance or the number of features completed. Students will also be graded on:

* Application functionality
* Code quality
* Team collaboration
* Git and GitHub activity
* Understanding of the project
* Ability to explain technical decisions
* Individual contribution
* Testing and problem-solving
* Final presentation and demonstration

Every team member must understand the application beyond only the files they personally edited.

---

# Required Development Method: Vertical Slices

**Teams must practice vertical-slice development throughout the project.**

A vertical slice is one complete feature that includes every required layer of the application.

For example, a product-listing vertical slice must include:

1. A database table or collection containing products
2. An Express route that retrieves products
3. Backend logic that processes the request
4. A frontend service that calls the API
5. A React component that displays the products
6. Loading and error states
7. Testing of the completed feature
8. A pull request and code review before merge

## How Teams Must Work

Teams should **not** divide the project like this:

* One student completes the entire frontend
* One student completes the entire backend
* One student completes the entire database

Instead, team members must:

* Own complete features end to end when possible
* Participate in database, backend, and frontend work across the project
* Understand how each layer connects
* Merge only features that meet the Definition of Done

## Suggested Vertical Slices

Build and merge features in this order when possible:

1. Product catalog (list + detail)
2. Shopping cart
3. Checkout and orders
4. Authentication
5. Customer order history
6. Product discovery (search, filter, sort)
7. Admin product management
8. Admin order management
9. Advanced S-Tier features (payments, variants, analytics, CI, monitoring)

Each slice should be demoable on its own after it is merged.

---

# Required Technology Stack

## Frontend

The frontend must use:

* React
* Next.js
* JavaScript or TypeScript
* CSS, CSS Modules, Tailwind CSS, or another approved styling system

The frontend is responsible for:

* Displaying the user interface
* Collecting user input
* Sending requests to the backend
* Displaying API responses
* Managing client-side state
* Providing navigation
* Handling loading and error states

## Backend

The backend must use:

* Node.js
* Express.js
* REST API routes

The Express backend must be a real, separate application. Next.js API routes may not replace the required Express backend.

The backend is responsible for:

* Processing requests
* Applying business logic
* Validating data
* Communicating with the database
* Managing authentication and authorization
* Returning appropriate API responses
* Handling errors securely

## Database

Each team must use one of the following:

* PostgreSQL
* MongoDB

The database must store real application data. Product and user data may not exist only inside a JavaScript array, JSON file, browser storage, or frontend component.

Possible database collections or tables include:

* Users
* Products
* Categories
* Carts
* Cart items
* Orders
* Order items
* Reviews
* Inventory records

## Version Control

Every team must use:

* Git
* GitHub
* Feature branches
* Pull requests
* Code reviews
* Meaningful commits

Students should not make all changes directly on the `main` branch.

---

# Required Project Structure

The frontend and backend must be separated clearly.

Example:

```text
ecommerce-final-project/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── services/
│   ├── styles/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

Teams may use a different structure, but the organization must be logical and easy to explain.

---

# Project Requirement Tiers

The tiers represent increasing levels of completeness and technical difficulty.

Completing a higher tier requires completing the important requirements of the tiers below it.

**S-Tier (Tier 4) is the prevalent requirement for this project.**

A project with many unfinished advanced features may receive a lower grade than a polished, reliable project that completes fewer features correctly. Prefer complete vertical slices over incomplete feature sprawl.

---

# Tier 1: Minimum Viable E-Commerce Application

## Expected Achievement Level

Tier 1 is the foundation. Every team must complete these requirements as vertical slices before expanding further.

A Tier 1 project demonstrates that the team can connect a Next.js frontend, Express backend, and database to create a functioning shopping experience.

## Product Requirements

The application must include:

* A homepage
* A product listing page
* At least eight products
* A product detail page
* Product name
* Product image
* Product description
* Product price
* Product category
* Product availability
* An add-to-cart feature
* A shopping-cart page
* The ability to change item quantity
* The ability to remove an item
* A calculated cart subtotal
* A simulated checkout form
* An order-confirmation screen

## Frontend Requirements

The frontend must include:

* Next.js routing
* Reusable React components
* Semantic HTML
* Responsive design
* Navigation
* Product cards
* Product details
* Cart state
* Forms
* Loading states
* Error messages
* Empty-state messages

Examples of empty states include:

* No products are available
* The shopping cart is empty
* No search results were found

## Backend Requirements

The Express backend must include:

* A working Express server
* Product routes
* Order routes
* Appropriate controllers or route handlers
* Request validation
* Error-handling middleware
* Appropriate HTTP status codes
* Environment variables
* A database connection

Minimum API examples:

```text
GET    /api/products
GET    /api/products/:id
POST   /api/orders
```

## Database Requirements

The database must store:

* Products
* Orders
* Order items or purchased products

Product records should include:

* Unique ID
* Name
* Description
* Price
* Category
* Image URL
* Inventory amount or availability status

Order records should include:

* Customer information
* Products purchased
* Quantities
* Total price
* Order date
* Order status

## Tier 1 User Stories

### Visitor

* As a visitor, I can browse available products.
* As a visitor, I can view details about one product.
* As a visitor, I can add products to my cart.
* As a visitor, I can update or remove cart items.
* As a visitor, I can submit a simulated order.

### Development Team

* As a developer, I can retrieve data from the database through an Express API.
* As a developer, I can display API data in the Next.js application.
* As a developer, I can explain how data moves through the application.

---

# Tier 2: E-Commerce Essentials

## Expected Achievement Level

Tier 2 is required on the path to S-Tier. The application should operate like a realistic e-commerce platform and support both customers and administrators.

Tier 2 includes the major Tier 1 requirements plus the following features. Deliver each feature as a vertical slice.

## User Authentication

The application must include:

* User registration
* User login
* User logout
* Password hashing
* Protected routes
* Authentication persistence
* User-friendly authentication errors

Passwords must never be stored as plain text.

## Customer Features

Logged-in customers should be able to:

* View their profile
* Update basic profile information
* Complete checkout
* View previous orders
* View individual order details
* See the status of an order

## Product Discovery

The application must include at least three of the following:

* Product search
* Category filtering
* Price filtering
* Sorting by price
* Sorting alphabetically
* Sorting by newest products
* Pagination
* Featured products
* Related products

## Administrator Features

An administrator should be able to:

* Access a protected admin dashboard
* Create products
* Edit products
* Delete or deactivate products
* View customer orders
* Update order status
* View inventory information

## Authorization

The system must distinguish between roles such as:

* Customer
* Administrator

Customers must not be able to access administrator routes by manually entering an admin URL.

Authorization must be enforced by the backend, not only by hiding frontend buttons.

## Expanded API Requirements

Possible routes include:

```text
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/me

GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id

POST   /api/orders
GET    /api/orders/my-orders
GET    /api/orders/:id
GET    /api/admin/orders
PATCH  /api/admin/orders/:id/status
```

Exact route names may differ, but the application must demonstrate complete CRUD and authentication workflows.

## Database Relationships

For PostgreSQL, the application should demonstrate appropriate relationships among tables.

Examples include:

* A user has many orders
* An order has many order items
* An order item belongs to one product
* A product belongs to one category

For MongoDB, teams must explain whether related data is embedded or referenced and why that structure was selected.

## Tier 2 User Stories

### Logged-In Customer

* As a customer, I can create an account.
* As a customer, I can securely sign in.
* As a customer, I can complete an order.
* As a customer, I can view my order history.
* As a customer, I cannot view another customer’s private orders.

### Administrator

* As an administrator, I can manage the product catalog.
* As an administrator, I can review customer orders.
* As an administrator, I can update an order’s status.
* As an administrator, I can access features that regular customers cannot access.

---

# Tier 3: Advanced Features and Professional Polish

## Expected Achievement Level

Tier 3 strengthens engineering quality on the way to S-Tier. Include thoughtful features, stronger architecture, and professional presentation.

Tier 3 includes the major Tier 1 and Tier 2 requirements plus several advanced features.

Teams should select features that support the purpose of their application instead of adding unrelated features only to increase the feature count. Each advanced feature must still be delivered as a complete vertical slice.

## Advanced Customer Features

Possible features include:

* Product reviews and ratings
* Wishlist or favorites
* Saved shipping addresses
* Recently viewed products
* Product recommendations
* Discount codes
* Multiple shipping options
* Guest checkout
* Saved carts
* Low-stock warnings
* Email-style order confirmation
* Order cancellation rules

## Advanced Administrator Features

Possible features include:

* Sales dashboard
* Revenue calculations
* Order statistics
* Low-inventory alerts
* Category management
* Customer management
* Discount-code management
* Product-image management
* Bulk product updates
* Inventory history
* Audit log

## Payment Integration

A Tier 3 or S-Tier project may include a test-mode payment system such as Stripe.

Payment features must:

* Use a test or sandbox environment
* Avoid storing card numbers
* Handle successful payments
* Handle declined or failed payments
* Avoid trusting prices sent by the frontend
* Calculate or verify order totals on the backend

## Image Uploads

Projects may allow administrators to upload product images.

The application must:

* Restrict acceptable file types
* Restrict file size
* Provide useful upload errors
* Store an image URL or identifier
* Avoid exposing private credentials

## Technical Quality

Projects at this level should demonstrate:

* Organized service layers
* Reusable frontend components
* Reusable backend logic
* Centralized error handling
* Data validation
* Secure environment variables
* Consistent API responses
* Thoughtful database design
* Optimized database queries
* Accessible forms
* Strong responsive design
* Appropriate use of client and server components in Next.js

## Testing Requirements

The project should include meaningful tests.

Possible tests include:

* Backend route tests
* Controller tests
* Validation tests
* Component tests
* Utility-function tests
* End-to-end tests

Teams must be able to explain:

* What was tested
* Why it was tested
* What behavior the test verifies
* How to run the tests

## Tier 3 User Stories

### Customer

* As a customer, I can review a product I purchased.
* As a customer, I can save products for later.
* As a customer, I receive clear feedback when checkout fails.
* As a customer, I can use the application on a mobile device.

### Administrator

* As an administrator, I can identify products with low inventory.
* As an administrator, I can view useful store statistics.
* As an administrator, I can manage products without changing the source code.

### Engineer

* As an engineer, I can test important application behavior.
* As an engineer, I can identify errors through clear logs.
* As an engineer, I can understand the project’s folder structure.
* As an engineer, I can safely configure the project using environment variables.

---

# Tier 4: S-Tier E-Commerce Platform (Primary Requirement)

## Expected Achievement Level

**S-Tier is the primary target for this final project.**

A Tier 4 project must not simply contain more pages. It must demonstrate stronger engineering, thoughtful architecture, reliable functionality, and a professional user experience.

Tier 4 includes the major expectations of the earlier tiers plus advanced technical or business features. Complete lower-tier foundations first, then expand with additional vertical slices.

## Required S-Tier Direction

Teams should implement a substantial combination of the features below. Choose features that form a coherent product, and ship each one as a finished vertical slice.

## Possible S-Tier Features

Possible features include:

* Real test-mode payment processing
* Payment webhook handling
* Product variants such as size and color
* Inventory tracked by variant
* Product recommendations based on user activity
* Advanced search
* Full-text database search
* Server-side pagination
* Image optimization
* Automated email notifications
* Real-time order-status updates
* Sales reports
* Exportable reports
* Refund simulation
* Shipping-rate calculation
* Tax calculation
* Multiple administrator roles
* Role and permission management
* Audit logging
* Background jobs
* Automated deployment workflow
* Continuous integration
* Extensive automated testing
* Performance monitoring
* Error-monitoring service
* Security protections and rate limiting

## Architecture Expectations

An S-Tier team must be able to explain:

* Application architecture
* Data flow
* Authentication flow
* Authorization strategy
* Database schema
* API design
* State-management decisions
* Security decisions
* Deployment strategy
* Testing strategy
* Performance considerations
* Trade-offs and limitations
* How each major feature was delivered as a vertical slice

## Leadership User Stories

### CEO or Store Owner

* As a store owner, I can understand the store’s revenue and order activity.
* As a store owner, I can identify popular and low-performing products.
* As a store owner, I can manage the business without editing source code.

### CTO or Lead Engineer

* As a technical leader, I can understand how the application is organized.
* As a technical leader, I can review documentation and deploy the application.
* As a technical leader, I can identify how errors, security, and testing are handled.
* As a technical leader, I can add future features without rewriting the entire application.

---

# Universal Requirements for Every Tier

The following requirements apply to every team regardless of progress toward S-Tier.

## 1. Semantic HTML

Students must use semantic HTML where appropriate.

Expected elements may include:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<form>
<label>
<footer>
```

Do not build the entire application using only `<div>` elements.

## 2. Responsive Design

The application must work at:

* Mobile widths
* Tablet widths
* Desktop widths

Pages should not create unnecessary horizontal scrolling.

## 3. Accessibility

The project must include:

* Descriptive image alternative text
* Connected form labels
* Keyboard-accessible controls
* Visible focus states
* Logical heading order
* Readable color contrast
* Useful button and link text
* Accessible error messages

## 4. Forms and Validation

Important forms must include:

* Frontend validation
* Backend validation
* Clear error messages
* Appropriate input types
* Disabled or loading states during submission

Frontend validation does not replace backend validation.

## 5. Error Handling

The application must handle common errors, including:

* Failed API requests
* Missing products
* Invalid form submissions
* Unauthorized requests
* Database errors
* Empty results
* Incorrect login information

The application should not fail with a blank page.

## 6. Environment Variables

Sensitive or environment-specific values must use environment variables.

Examples include:

* Database connection strings
* Authentication secrets
* API keys
* Payment secrets

The `.env` file must not be committed to GitHub.

An `.env.example` file should document the required variable names without exposing real secret values.

## 7. Code Organization

The project should demonstrate:

* Reusable components
* Descriptive variable names
* Descriptive function names
* Organized folders
* Minimal duplicated code
* Consistent formatting
* Comments where explanation is necessary
* Separation of concerns

## 8. Deployment

The team must deploy:

* The Next.js frontend
* The Express backend
* The database

The deployed frontend must communicate with the deployed backend.

A project that works only on one student’s local computer is incomplete.

## 9. Documentation

Every project must include a complete `README.md`.

## 10. Vertical-Slice Delivery

Every major feature must be delivered as a vertical slice that includes UI, API, database work, validation, error handling, and review before merge.

---

# README.md Requirements

The README must include:

## Project Title

The name of the e-commerce application.

## Team Members

List every team member and their primary contributions.

## Project Description

Explain:

* What the store sells
* Who the target customer is
* What problem the application solves
* What makes the store unique

## Features

List the completed features.

Separate completed features from planned or incomplete features.

## Technology Stack

List:

* Frontend technologies
* Backend technologies
* Database
* Authentication tools
* Deployment platforms
* Testing tools
* Additional libraries

## Application Architecture

Explain how the following parts communicate:

```text
Next.js frontend
        ↓
Express REST API
        ↓
MongoDB or PostgreSQL
```

## Vertical-Slice Examples

Document at least two completed features as vertical slices, including:

* Database changes
* API routes
* Frontend components and services
* How the feature was tested

## Local Installation

Provide step-by-step instructions to:

1. Clone the repository
2. Install frontend dependencies
3. Install backend dependencies
4. Configure environment variables
5. Start the database or connect to it
6. Run the backend
7. Run the frontend
8. Run tests

## Environment Variables

List each required environment-variable name without revealing secret values.

## API Documentation

Document the major routes.

Example:

```text
GET /api/products
Returns all available products.

GET /api/products/:id
Returns one product.

POST /api/orders
Creates a new order.
```

## Database Design

Explain the major collections or tables and their relationships.

## Screenshots

Include screenshots of important pages.

## Known Issues

Document bugs, incomplete features, or technical limitations honestly.

## Future Improvements

Explain what the team would add with additional development time.

---

# Git and GitHub Collaboration Requirements

GitHub activity will be reviewed as part of the grade.

## Repository Requirements

The repository must include:

* A clear README
* A `.gitignore`
* Organized source code
* Meaningful commit history
* Feature branches
* Pull requests
* Code reviews
* Contributions from all team members

## Branch Requirements

Use descriptive branch names tied to vertical slices.

Examples:

```text
feature/product-list
feature/shopping-cart
feature/user-login
feature/admin-dashboard
fix/checkout-total
fix/mobile-navigation
```

Avoid unclear branch names such as:

```text
test
stuff
changes
new
branch1
```

## Commit Requirements

Commit messages should explain what changed.

Good examples:

```text
Create product listing API endpoint
Add responsive product card component
Validate checkout form fields
Fix cart quantity calculation
Protect administrator routes
```

Weak examples:

```text
work
update
stuff
finished
changes
```

## Pull Request Requirements

Each significant vertical slice should use a pull request.

A pull request should include:

* A descriptive title
* A summary of the changes across frontend, backend, and database when applicable
* Instructions for testing the full slice
* Screenshots when the interface changed
* A reference to the feature or issue
* A review from another team member

Students should not approve code they have not read.

## Merge Conflicts

Students may encounter merge conflicts.

The team should be prepared to explain:

* Why the conflict occurred
* Which files were affected
* How the conflict was resolved
* How the final code was tested

## Individual Accountability

Each student must:

* Create meaningful commits
* Participate in pull requests
* Review another team member’s work
* Attend team meetings
* Complete assigned responsibilities
* Understand the major project features
* Communicate blockers
* Participate in the final presentation

A student may receive an individual grade different from the team grade.

---

# Required Team Documentation

Teams must maintain evidence of their planning and collaboration.

Acceptable tools include:

* GitHub Projects
* GitHub Issues
* Trello
* Jira
* Notion
* A shared task board approved by the instructor

The team board must show:

* Backlog
* Assigned tasks
* Tasks in progress
* Completed tasks
* Team-member assignments
* Feature priorities
* Vertical-slice ownership

Each major task should identify:

* Feature name
* Assigned team member
* Acceptance criteria spanning UI, API, and database
* Current status

---

# Required Project Artifacts

Each team must submit:

1. GitHub repository link
2. Live frontend link
3. Live backend or API link
4. Project-management board
5. Database diagram or model explanation
6. API documentation
7. Final presentation slides
8. Recorded project demonstration
9. Individual reflection
10. Team-member contribution report

---

# Final Presentation Requirements

Every team member must speak during the final presentation.

The presentation should include:

## 1. Project Introduction

Explain:

* Project name
* Store concept
* Intended users
* Main problem being solved

## 2. Live Demonstration

Demonstrate a complete user flow.

A recommended flow is:

1. Visit the homepage
2. Browse products
3. Search or filter products
4. Open a product page
5. Add a product to the cart
6. Change the quantity
7. Complete checkout
8. View the order
9. Sign in as an administrator
10. Manage a product or order

Only demonstrate features that are working reliably.

## 3. Technical Architecture

Explain:

* Frontend
* Backend
* Database
* Authentication
* Deployment
* How data travels through the application
* How the team practiced vertical-slice development

## 4. Team Collaboration

Explain:

* How work was divided into vertical slices
* How branches were used
* How pull requests were reviewed
* How conflicts or blockers were handled

## 5. Challenges

Explain at least one significant technical challenge and how the team addressed it.

## 6. Future Improvements

Describe realistic improvements that could be completed after the course.

---

# Individual Technical Review

After or during the presentation, students may be asked individual questions.

Possible questions include:

* What feature did you build as a vertical slice?
* Show the code responsible for that feature across frontend, backend, and database.
* How does the frontend communicate with Express?
* Where is the data stored?
* What happens when a customer submits an order?
* How is the cart total calculated?
* How are passwords protected?
* How are administrator routes protected?
* Why did your team choose MongoDB or PostgreSQL?
* What is the difference between authentication and authorization?
* What does one of your database models represent?
* How does your application handle an invalid request?
* What was included in one of your pull requests?
* What would happen if the database were unavailable?
* What would you improve with more time?

A student who cannot explain their own contribution or the basic application flow may lose individual understanding points.

---

# Grading Rubric

## 1. Application Functionality — 25 Points

The project will be evaluated on:

* Required user flows
* Frontend and backend communication
* Database functionality
* Form behavior
* Cart and checkout behavior
* Authentication and authorization when implemented
* Error handling
* Reliability during the demonstration

A feature receives full credit only when it works from the user interface through the backend and database as a complete vertical slice.

## 2. Technical Implementation — 20 Points

The project will be evaluated on:

* React and Next.js implementation
* Express API design
* Database design
* Semantic HTML
* Responsive design
* Validation
* Security practices
* Code organization
* Reusable components
* Appropriate HTTP methods and status codes
* Progress toward S-Tier engineering quality

## 3. Collaboration and Teamwork — 20 Points

The team will be evaluated on:

* GitHub contribution history
* Feature branches
* Pull requests
* Code reviews
* Project-management activity
* Vertical-slice ownership
* Balanced participation
* Communication
* Meeting responsibilities
* Conflict resolution
* Ability to work as a development team

Grades may be adjusted individually when contribution levels differ significantly.

## 4. Understanding of the Project — 20 Points

Each student will be evaluated on their ability to:

* Explain the application architecture
* Explain their own code
* Explain another major project feature
* Trace data through the application
* Explain database decisions
* Explain API routes
* Identify errors and possible solutions
* Discuss technical trade-offs
* Answer instructor questions

This category is graded individually.

## 5. User Experience and Design — 5 Points

The project will be evaluated on:

* Navigation
* Visual hierarchy
* Consistency
* Accessibility
* Responsive behavior
* Loading states
* Error states
* Overall usability

## 6. Documentation and Deployment — 5 Points

The project will be evaluated on:

* README quality
* Installation instructions
* Environment-variable documentation
* API documentation
* Database documentation
* Working deployment links

## 7. Final Presentation — 5 Points

The presentation will be evaluated on:

* Organization
* Professionalism
* Participation from all team members
* Successful demonstration
* Technical explanation
* Discussion of challenges and future improvements

**Total: 100 Points**

---

# Tier and Grade Guidance

The tier completed does not automatically guarantee a particular grade. Quality, reliability, teamwork, and understanding still matter.

**S-Tier is the expected target.** Lower ranges below describe outcomes when teams fall short of that target.

## Tier 1 Guidance

A functional but basic project that meets only the minimum requirements may earn a passing grade.

Typical range:

**65–74**

## Tier 2 Guidance

A complete and polished application with authentication, administrative functionality, strong collaboration, and reliable deployment may earn a strong grade.

Typical range:

**75–89**

## Tier 3 Guidance

An advanced, polished application with thoughtful features, testing, strong engineering, and clear team understanding may earn an excellent grade.

Typical range:

**90–96**

## Tier 4 / S-Tier Guidance

An exceptional application demonstrating professional architecture, advanced engineering, extensive testing, strong leadership, vertical-slice delivery, and excellent understanding may earn the highest grade.

Typical range:

**97–100**

These ranges are guidance only. A team cannot earn a high grade by adding advanced features while ignoring required functionality, collaboration, documentation, vertical slices, or individual understanding.

---

# Automatic Deductions

Points may be deducted for:

* No working database
* No Express backend
* Using Next.js API routes instead of the required Express backend
* Hard-coded product data presented as database data
* Committing passwords or secret keys
* Missing repository access
* Missing deployment
* Making all commits from one team member’s account
* Working directly on `main` without branches
* Missing pull requests
* Missing README documentation
* Inaccessible or broken core features
* Submitting features that the team cannot explain
* Dividing work strictly by layer instead of practicing vertical slices
* Copying a tutorial without understanding or meaningful modification

---

# Definition of Done

A feature is considered complete only when the vertical slice includes all of the following:

* The user interface is implemented
* The frontend communicates with the backend
* The backend validates the request
* The database is updated or queried correctly
* Successful results are displayed
* Errors are handled
* The feature works responsively
* The code has been committed
* A pull request has been reviewed
* The feature has been merged
* The team can explain how it works across every layer

A page that only displays a visual design is not considered a complete full-stack feature.

---

# Final Reminder

The goal of this project is not to create the largest application possible.

The goal is to demonstrate that the team can:

* Plan a real application
* Build a full-stack system using vertical slices
* Work collaboratively
* Use professional Git practices
* Solve technical problems
* Understand the code
* Clearly explain the finished product
* Reach S-Tier quality in architecture, reliability, and professionalism

A smaller set of complete, tested, and well-understood vertical slices is stronger than a large project containing broken or unexplained features.
