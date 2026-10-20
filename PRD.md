
# Product Requirements Document — Study Session Tracker

## Overview
A study session tracker that helps students log how long they study each subject and see their weekly progress.

## Target User
College students who want to understand how much time they spend studying for different classes.

## What the App Remembers
Each study session contains:
- Subject name
- Duration in minutes
- Date
- Unique session ID

The sessions are stored in a JavaScript array and saved using localStorage.

## Features

1. Log a study session by entering a subject and duration.
2. Calculate total hours studied during the current week.
3. Show total study time for each subject this week.
4. Display a history of saved study sessions.
5. Sort sessions by date, subject, or duration.
6. Delete individual sessions or reset all saved data.

## Empty State
When there are no sessions:
- Display "No sessions yet. Log your first one above."
- Show the weekly total as 0 hr 0 min.
- Display a friendly placeholder instead of subject totals.

## Invalid Input State
- If the subject is empty, show "Please enter a subject name."
- If the duration is empty, zero, negative, or not a whole number, show "Please enter a valid number of minutes greater than 0."
- Error messages appear in red below the relevant field.
- Errors disappear when the user corrects the input.
- No browser alert boxes are used.

## In-Use State
When sessions have been added:
- The weekly total updates automatically.
- Subject summary cards display weekly study time.
- Session history displays subject, duration, date, and a Delete button.
- The sorting dropdown changes the order of displayed sessions.
- Refreshing the page keeps the saved sessions.

## After Reset
- The user clicks Reset All.
- An in-page confirmation appears before deleting data.
- Confirming clears all saved sessions.
- The dashboard returns to the empty state.
- Canceling keeps the existing sessions.

## User Interactions

1. Form submission adds a new session.
2. Delete buttons remove individual sessions.
3. Reset All clears saved sessions after confirmation.
4. A dropdown sorts the session history.
5. Pressing Enter in the form submits a session.

## Data Storage
The application uses a JavaScript array called sessions.

localStorage saves the array so the information remains available after refreshing the browser.

No database or external API is required.

## Technical Requirements
- HTML for page structure
- CSS for styling
- JavaScript for interactions and calculations
- localStorage for saving sessions
- Responsive layout for mobile and desktop
- No external libraries or frameworks
- GitHub Pages for deployment
