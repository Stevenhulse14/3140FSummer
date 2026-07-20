# Homework Assignment: Git and GitHub Workflow Recording

## Assignment Overview

For this homework assignment, you will create a small HTML and CSS project, connect the project to a GitHub repository, create and work on a separate Git branch, open a pull request, review your own changes, and merge the branch into the `main` branch.

You must record your screen while completing the assignment. Your recording should clearly show the commands you enter, the files you create, and the actions you complete on GitHub.

---

# Learning Objectives

By the end of this assignment, you should be able to:

* Create a local Git repository.
* Create a repository on GitHub.
* Connect a local repository to a GitHub repository.
* Stage and commit files using Git.
* Push a local project to GitHub.
* Create and switch to a Git branch.
* Add a new file while working on a branch.
* Push a branch to GitHub.
* Create a pull request.
* Review changes before merging.
* Merge a branch into the `main` branch.
* Explain the purpose of common Git and GitHub commands.

---

# Required Project Files

Your project must include the following files:

```text
git-github-homework/
│
├── index.html
├── styles.css
├── README.md
└── logo.png
```

The `logo.png` file will be added later while working on your new branch.

Use any PNG image for `logo.png`. A small file is recommended.

You may create your own image, download a copyright-free image, or use a simple placeholder PNG.

---

# Part 1: Create the HTML and CSS Project

Before working with Git, create a folder named:

```text
git-github-homework
```

Inside the folder, create these three files:

```text
index.html
styles.css
README.md
```

Do not add `logo.png` yet. The image will be added during the branching portion of the assignment.

---

# HTML Requirements

Your `index.html` file must include:

* A valid HTML document structure
* A page title
* A semantic `<header>`
* A semantic `<main>`
* At least one `<section>`
* A semantic `<footer>`
* A heading
* A paragraph
* A link to the external CSS file

Example structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Git and GitHub Homework</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>My Git and GitHub Project</h1>
  </header>

  <main>
    <section>
      <h2>About This Project</h2>
      <p>
        This project demonstrates how to use Git branches,
        GitHub, and pull requests.
      </p>
    </section>
  </main>

  <footer>
    <p>Created by Your Name</p>
  </footer>
</body>
</html>
```

You may customize the content and design.

---

# CSS Requirements

Your `styles.css` file must include:

* A rule for the `body`
* A background color
* A font family
* Styling for the header
* Styling for the main section
* Padding or margin
* At least one border, border radius, or box shadow
* Styling for the footer

Example:

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #222;
}

header {
  padding: 2rem;
  text-align: center;
  background-color: #1f2937;
  color: white;
}

main {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}

section {
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

footer {
  padding: 1rem;
  text-align: center;
}
```

---

# README Requirements

Your `README.md` file must include:

* The project title
* Your name
* A short project description
* A list of the files in the project
* A short explanation of what Git is
* A short explanation of what GitHub is
* A short explanation of what a branch is
* A short explanation of what a pull request is

Example:

```md
# Git and GitHub Homework

## Student

Your Name

## Project Description

This project demonstrates how to create a local Git repository,
connect it to GitHub, create a branch, open a pull request, and
merge changes into the main branch.

## Project Files

- index.html
- styles.css
- README.md
- logo.png

## Git

Git is a version-control system that tracks changes made to files.

## GitHub

GitHub is an online platform used to store and manage Git repositories.

## Branch

A branch is a separate version of a project where changes can be made
without immediately changing the main version.

## Pull Request

A pull request is a request to review and merge changes from one branch
into another branch.
```

---

# Part 2: Create a GitHub Repository

Go to GitHub and create a new repository.

Use the following repository name:

```text
git-github-homework
```

During this assignment, it is recommended that you create an empty repository.

When creating the repository, do not select the options to automatically create:

* A README file
* A `.gitignore` file
* A license

You already created your own `README.md` file locally.

After creating the repository, keep the GitHub repository page open. You will need the repository URL.

The URL will look similar to:

```text
https://github.com/your-username/git-github-homework.git
```

---

# Part 3: Connect Your Local Repository to GitHub

Open your terminal or command prompt.

Navigate into your project folder.

Example:

```bash
cd path/to/git-github-homework
```

Confirm that you are inside the correct folder.

You may use:

```bash
pwd
```

On some Windows systems, you may use:

```bash
cd
```

You can also list the files in the folder.

Mac or Linux:

```bash
ls
```

Windows Command Prompt:

```bash
dir
```

You should see:

```text
index.html
styles.css
README.md
```

---

## Step 1: Initialize Git

Run:

```bash
git init
```

### Definition

`git init` creates a new local Git repository inside the current folder.

---

## Step 2: Check the Repository Status

Run:

```bash
git status
```

### Definition

`git status` displays the current branch and shows which files are untracked, modified, or ready to be committed.

At this point, the files should appear as untracked files.

---

## Step 3: Stage the Files

Run:

```bash
git add .
```

### Definition

`git add .` stages all new and modified files in the current project.

Staging means preparing files to be included in the next commit.

Run `git status` again:

```bash
git status
```

The files should now appear under “Changes to be committed.”

---

## Step 4: Create the First Commit

Run:

```bash
git commit -m "Create initial HTML and CSS project"
```

### Definition

A commit is a saved checkpoint in the history of a Git repository.

The `-m` option allows you to include a short commit message.

A good commit message should clearly explain what changed.

---

## Step 5: Rename the Main Branch

Run:

```bash
git branch -M main
```

### Definition

This command renames the current branch to `main`.

The `main` branch is normally the primary branch of a repository.

---

## Step 6: Add the GitHub Repository as a Remote

Copy the repository URL from GitHub.

Run:

```bash
git remote add origin https://github.com/your-username/git-github-homework.git
```

Replace the example URL with your own repository URL.

### Definition

A remote is an online version of your repository.

`origin` is the standard name used for the main remote repository.

Verify the remote connection:

```bash
git remote -v
```

You should see your GitHub repository URL listed.

---

## Step 7: Push the Main Branch to GitHub

Run:

```bash
git push -u origin main
```

### Definition

`git push` uploads local commits to GitHub.

The `-u` option connects your local `main` branch to the remote `main` branch.

After this first push, future pushes from `main` may only require:

```bash
git push
```

Refresh your GitHub repository page.

You should now see:

* `index.html`
* `styles.css`
* `README.md`

---

# Part 4: Create a New Branch

You must not add `logo.png` directly to the `main` branch.

Create a separate branch for the image.

Use this branch name:

```text
add-logo
```

Run:

```bash
git switch -c add-logo
```

You may also use:

```bash
git checkout -b add-logo
```

### Definition

A branch is a separate line of development.

Branches allow developers to make changes without immediately affecting the `main` branch.

The `-c` option creates the branch and switches to it.

Confirm your current branch:

```bash
git branch
```

You should see an asterisk next to `add-logo`.

Example:

```text
* add-logo
  main
```

---

# Part 5: Add logo.png on the Branch

Find a small PNG image and place it inside your project folder.

Rename the image:

```text
logo.png
```

Your folder should now contain:

```text
index.html
styles.css
README.md
logo.png
```

Update your `index.html` file so that the image appears on the webpage.

Add the image inside the `<header>` or `<main>` element.

Example:

```html
<img src="logo.png" alt="Project logo">
```

Add CSS for the image.

Example:

```css
img {
  width: 100px;
  height: auto;
}
```

### Alternative Text

The `alt` attribute provides a written description of an image.

It is important for accessibility because screen-reading software can read the description to users who cannot see the image.

---

# Part 6: Commit the Branch Changes

Check the status:

```bash
git status
```

You should see:

* `logo.png` as a new file
* `index.html` as modified
* `styles.css` as modified if you added image styling

Stage the changes:

```bash
git add .
```

Check the status again:

```bash
git status
```

Create a commit:

```bash
git commit -m "Add project logo"
```

Use:

```bash
git log --oneline
```

to view your recent commits.

### Definition

`git log` displays the commit history.

The `--oneline` option displays each commit in a shortened format.

---

# Part 7: Push the Branch to GitHub

Run:

```bash
git push -u origin add-logo
```

### Definition

This command uploads the local `add-logo` branch to GitHub.

The `-u` option connects the local branch to the remote branch.

Refresh your GitHub repository page.

GitHub may display a message that says:

```text
Compare & pull request
```

Select that button.

---

# Part 8: Create a Pull Request

A pull request asks to merge changes from one branch into another.

Your pull request should show:

```text
base: main
compare: add-logo
```

This means you are requesting to merge the `add-logo` branch into the `main` branch.

Use the following pull request title:

```text
Add project logo
```

Add a description similar to:

```text
This pull request adds logo.png to the project and displays the
image on the webpage.
```

Select:

```text
Create pull request
```

---

# Part 9: Review Your Own Pull Request

Before merging, review the changes.

Open the:

```text
Files changed
```

tab.

Check that:

* `logo.png` was added
* The image path in `index.html` is correct
* The image includes an `alt` attribute
* The CSS correctly controls the image size
* No unrelated files were changed
* The code is properly indented
* The webpage still works

During your recording, explain what you are reviewing.

You should explain that code review is the process of checking changes before they become part of the main project.

---

# Part 10: Merge the Pull Request

Return to the pull request conversation page.

Select:

```text
Merge pull request
```

Then select:

```text
Confirm merge
```

After the pull request is merged, GitHub may display an option to delete the branch.

Select:

```text
Delete branch
```

Deleting the remote branch after merging is recommended because the work is complete.

The changes should now appear on the `main` branch.

---

# Part 11: Update Your Local Main Branch

Your GitHub `main` branch now contains the merged changes, but your local `main` branch may not contain them yet.

Return to your terminal.

Switch to the local `main` branch:

```bash
git switch main
```

Download the latest changes:

```bash
git pull origin main
```

### Definition

`git pull` downloads changes from a remote repository and updates the current local branch.

Check the files:

```bash
git status
```

Your local repository should be up to date.

You may also use:

```bash
git log --oneline --all --graph
```

This command displays the branch and commit history in a visual text format.

---

# Recording Requirements

Your video must show the entire Git and GitHub process.

Your face does not need to appear unless your instructor requires it.

Your voice should be included so that you can explain what you are doing.

The recording must show the following:

1. Your project folder
2. `index.html`
3. `styles.css`
4. `README.md`
5. The completed webpage in a browser
6. The creation of the GitHub repository
7. `git init`
8. `git status`
9. `git add .`
10. The first commit
11. Connecting the local repository to GitHub
12. Pushing the `main` branch
13. Creating the `add-logo` branch
14. Adding `logo.png`
15. Updating the HTML and CSS
16. Committing the logo changes
17. Pushing the `add-logo` branch
18. Creating a pull request
19. Reviewing the changed files
20. Merging the pull request
21. Deleting the remote branch
22. Switching back to the local `main` branch
23. Pulling the merged changes
24. Showing the final GitHub repository

Do not only show the final result. The purpose of the assignment is to demonstrate the complete workflow.

---

# Required Verbal Explanations

During the recording, briefly explain the meaning of:

* Repository
* Local repository
* Remote repository
* Commit
* Branch
* Push
* Pull
* Pull request
* Merge
* Code review

You should also explain why developers use branches instead of making every change directly on `main`.

---

# Recommended Recording Structure

## Introduction

State:

* Your name
* The assignment name
* What the project will demonstrate

Example:

```text
Hello, my name is __________. In this recording, I will demonstrate
how to create a local Git repository, connect it to GitHub, create a
branch, push the branch, open a pull request, review the changes, and
merge the branch into main.
```

## Part One

Show the HTML, CSS, and README files.

## Part Two

Create and connect the local and remote repositories.

## Part Three

Create the branch and add `logo.png`.

## Part Four

Push the branch and create the pull request.

## Part Five

Review and merge the pull request.

## Conclusion

Show the final GitHub repository and summarize what you completed.

---

# Important Git Commands

```bash
git init
```

Creates a local Git repository.

```bash
git status
```

Displays the current state of the repository.

```bash
git add .
```

Stages all project changes.

```bash
git commit -m "Commit message"
```

Creates a saved checkpoint.

```bash
git branch -M main
```

Renames the current branch to `main`.

```bash
git remote add origin REPOSITORY-URL
```

Connects the local repository to GitHub.

```bash
git remote -v
```

Displays the connected remote repositories.

```bash
git push -u origin main
```

Pushes the `main` branch to GitHub.

```bash
git switch -c add-logo
```

Creates and switches to the `add-logo` branch.

```bash
git branch
```

Displays the local branches.

```bash
git push -u origin add-logo
```

Pushes the `add-logo` branch to GitHub.

```bash
git switch main
```

Switches back to the local `main` branch.

```bash
git pull origin main
```

Downloads and applies the latest changes from GitHub.

```bash
git log --oneline --all --graph
```

Displays the commit and branch history.

---

# Common Problems and Solutions

## Problem: Git Is Not Recognized

Example error:

```text
git is not recognized as an internal or external command
```

Git may not be installed correctly.

Install Git and restart your terminal.

Confirm the installation:

```bash
git --version
```

---

## Problem: Git Does Not Know Your Name or Email

You may see a message asking you to configure your identity.

Run:

```bash
git config --global user.name "Your Name"
```

Run:

```bash
git config --global user.email "your-email@example.com"
```

Use the email address connected to your GitHub account when possible.

---

## Problem: The Remote Already Exists

You may see:

```text
remote origin already exists
```

Check the existing remote:

```bash
git remote -v
```

To replace the URL, use:

```bash
git remote set-url origin REPOSITORY-URL
```

---

## Problem: The Image Does Not Appear

Check the following:

* The file is named exactly `logo.png`
* The file is inside the project folder
* The spelling and capitalization match
* The HTML uses the correct path

Correct example:

```html
<img src="logo.png" alt="Project logo">
```

File names may be case-sensitive.

`Logo.png` and `logo.png` may be treated as different names.

---

## Problem: You Are on the Wrong Branch

Check your current branch:

```bash
git branch
```

Switch to the correct branch:

```bash
git switch add-logo
```

Do not add the logo directly to `main`.

---

## Problem: GitHub Says There Is Nothing to Compare

Confirm that:

* You committed the changes on `add-logo`
* You pushed `add-logo`
* The logo changes are not already on `main`

Use:

```bash
git status
```

and:

```bash
git log --oneline --all --graph
```

to inspect the repository.

---

# Reflection Questions

Answer each question in complete sentences.

1. What is the difference between Git and GitHub?
2. What is the difference between a local repository and a remote repository?
3. What does `git add .` do?
4. What information should a commit message communicate?
5. Why did you create the `add-logo` branch?
6. What does `git push` do?
7. What is the purpose of a pull request?
8. What did you check during your code review?
9. What happened to the `main` branch after the pull request was merged?
10. Why did you run `git pull` after returning to your local `main` branch?
11. What problem did you experience, and how did you solve it?
12. Why is it useful to delete a branch after it has been merged?

---

# Academic Integrity

You may ask for help understanding a command or solving an error. However, the recording must show you completing and explaining the process yourself.

Do not submit another student’s repository, recording, image, or Git history as your own work.

Your commits, branches, pull request, and recording should demonstrate your personal work.
