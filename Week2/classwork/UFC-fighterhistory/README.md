# Fight History Explorer

## Project Purpose

Fight History Explorer is a classroom demonstration that shows how JavaScript can turn a static HTML and CSS layout into an interactive, data-driven application.

Students already know basic HTML and CSS. This project demonstrates how JavaScript can:

* Store complex information
* Calculate statistics
* Respond to user choices
* Filter and sort records
* Find specific fights
* Create HTML elements
* Update the page when data changes

All fighters and events are fictional. This project is not affiliated with any professional combat sports organization.

## Technologies

* HTML
* CSS
* Vanilla JavaScript

No React, frameworks, TypeScript, backend, external API, or build tools are required.

Open `index.html` in a browser to run the project.

## Project Structure

```text
UFC-fighterhistory/
├── index.html
├── styles.css
├── script.js
├── README.md
└── images/
    └── fighters.png
```

## JavaScript Concepts Demonstrated

* Variables
* Functions
* Parameters
* Return values
* Arrays
* Objects
* Arrays of objects
* Nested arrays (`fighter.fights`)
* Conditional statements
* Loops
* Array methods
* DOM selection
* DOM manipulation
* Event listeners
* Filtering
* Finding specific data
* Sorting
* Rendering data into HTML
* Updating the page after data changes

## Data Structure

### The `fighters` array

The application stores all fighters in one array:

```js
const fighters = [];
```

### Fighter objects

Each fighter object includes profile information and a nested `fights` array.

Important properties:

* `id`
* `name`
* `nickname`
* `initials`
* `weightClass`
* `fightingStyle`
* `hometown`
* `imageClass`
* `fights`

### Fight objects

Each fight object includes:

* `id`
* `opponent`
* `result`
* `method`
* `round`
* `time`
* `event`
* `date`
* `location`
* `notes`

The nested `fights` array is the source of truth for calculated statistics such as wins, losses, finish percentage, and current streak.

## Important Functions

* `getSelectedFighter()` — finds the current fighter object
* `displayFighterProfile()` — updates the profile card
* `displayCareerStatistics()` — builds statistic cards
* `displayRecentForm()` — shows the last five results
* `displayFightHistory()` — renders the filtered fight list
* `createFightCard()` — builds one fight `<article>`
* `filterFights()` — returns fights matching the selected filter
* `sortFights()` — returns a sorted copy of fights
* `findFightById()` — locates one fight with `.find()`
* `showFightDetails()` / `closeFightDetails()` — control the details panel
* `calculateWins()`, `calculateLosses()`, and related helpers — return statistics
* `calculateFinishPercentage()` — returns finish rate from knockout and submission wins
* `calculateCurrentStreak()` — builds the streak message
* `updateApplication()` — refreshes every major section after a change

## Array Methods

* `.forEach()` — loops through fighters, stats, and fights while creating DOM elements
* `.filter()` — selects wins, losses, knockouts, submissions, or decisions
* `.find()` — locates a fighter or fight by ID
* `.map()` — converts recent fights into `W`, `L`, and `D` values
* `.slice()` — keeps only the most recent five fights for form display
* `.sort()` — orders fights without mutating the original array directly
* `.push()` — adds the demonstration fight to the selected fighter

## Application Flow

```text
User selects a fighter
        ↓
JavaScript finds the fighter object
        ↓
JavaScript calculates statistics
        ↓
JavaScript renders the profile and fights
        ↓
The browser displays the updated interface
```

When the user filters, sorts, opens details, or adds the demonstration fight, JavaScript updates application state and calls `updateApplication()` again.

## Event Delegation

The fight-history list uses event delegation.

Instead of attaching one listener to every “View Details” button, the list container listens for clicks. When a click happens, JavaScript checks whether the target is a details button and then finds the matching fight ID.

This is useful because fight cards are created and removed dynamically.

## Image Sprite

The file `images/fighters.png` is a sprite sheet containing six fictional fighter portraits in a 3-column by 2-row grid.

CSS uses:

* `background-image`
* `background-size: 300% 200%`
* different `background-position` values for each fighter class

If the image is unavailable, the gradient background and fighter initials still provide a clean placeholder.

## Accessibility

* Form controls have labels
* Headings follow a logical order
* Focus styles are visible
* Buttons use descriptive text
* Live regions announce updates
* Win, loss, and draw labels appear as text, not color alone

## Running the Project

1. Open the `UFC-fighterhistory` folder.
2. Open `index.html` in a web browser.
3. Select different fighters.
4. Use the filter buttons and sort menu.
5. Click **View Details** on a fight card.
6. Click **Add Demonstration Fight** to see one data change update multiple areas of the page.

## Future Improvements

* Real API data
* More fighters
* Fighter comparisons
* Charts for finish rates
* Search by opponent or event
* Saved favorite fighters
