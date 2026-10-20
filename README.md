
# StudyFlow — Study Session Tracker

## About the Project

StudyFlow is a simple study session tracker designed for college students who want to understand how much time they spend studying.

I created this project because I sometimes lose track of how long I study for different classes. I wanted a simple tool that would help me stay organized and see my weekly progress.

## Live Website

https://azracengel.github.io/study-session-tracker/

## Features

- Log study sessions by subject and duration
- Automatically calculate total study time each week
- View weekly study time by subject
- See a history of previous study sessions
- Sort sessions by date, subject, or duration
- Delete individual sessions
- Reset all data with confirmation
- Save sessions using localStorage
- Responsive layout for mobile and desktop

## Technologies Used

- HTML
- CSS
- JavaScript
- localStorage
- GitHub Pages

## How It Works

Users enter a subject and the number of minutes they studied.

When they click "Log Session," JavaScript adds the session to an array and updates the dashboard.

The application uses localStorage to save sessions so the data remains available after refreshing the browser.

## Design

I chose a soft lavender and white color palette because I wanted the website to feel calm, organized, and easy to use.

I explored two design trials before choosing the final dashboard layout.

## Project Files

- index.html — Website structure
- style.css — Website styling
- app.js — JavaScript functionality
- PROPOSAL.md — Original project idea
- PRD.md — Product requirements
- DESIGN.md — Design decisions
- AGENTS.md — Coding guidelines
- design-trials/ — Two design experiments


## AI Reflection — Verification of AI Output

I used Claude to help me plan and build StudyFlow, especially the JavaScript that manages study sessions and calculates weekly totals.

One piece of AI-generated output I verified was the JavaScript that saves study sessions using localStorage. I wanted to make sure the website actually remembered information instead of only displaying it temporarily.

I tested this by adding study sessions for Accounting and Analytics, checking that the weekly total updated, and refreshing the browser to confirm the sessions remained saved. I also tested deleting sessions, sorting them, and resetting the dashboard.

This helped me understand that the sessions array holds the data while the website is running, localStorage saves that data between visits, and the dashboard redraws when the data changes.

**Relevant commit:** [JavaScript implementation](https://github.com/azracengel/study-session-tracker/commit/7a87287c596480f562d40e3cf1ee08405e3650be)

**Difference from my original expectations:** I originally thought that logging study sessions would just involve adding the information to a list. I learned that JavaScript also needs to calculate the weekly total from the saved sessions and update the dashboard whenever something changes. I also learned that localStorage is what allows the website to remember my sessions after I refresh the page.

## Future Improvements

In the future, I would like to add:

- A built-in study timer
- Daily and monthly study charts
- Study goals for each subject
- A calendar showing study history
