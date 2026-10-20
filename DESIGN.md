
# Design Direction — StudyFlow

## Design Trials

I explored two possible designs:

- Design A: Soft lavender background, rounded white cards, purple buttons, and a modern dashboard layout.
- Design B: Warm neutral background, rectangular cards, and a more traditional layout.

I chose Design A because I want my study tracker to feel organized, welcoming, and easy to use.

## Color Palette

- Background: #f7f5ff
- Cards: #ffffff
- Light lavender: #e9e2ff
- Primary purple: #7864c8
- Main text: #25213f
- Secondary text: #6b7280
- Error text: #dc2626

## Typography

- Font: Arial, sans-serif
- Headings: Bold and easy to read
- Body text: Simple and readable
- Statistics: Large, bold numbers

## Layout

- Centered dashboard with a maximum width of 750px
- Header with the StudyFlow name and description
- Weekly study total near the top
- White card for the study session form
- Subject summary cards below the form
- Session history with sorting and delete options
- Rounded buttons and cards
- Responsive layout for mobile devices

## Page States

### Empty State
Show zero study hours and a friendly message encouraging the user to log their first session.

### Invalid Input State
Display red error messages below invalid form fields without using browser alert boxes.

### In-Use State
Show updated weekly totals, subject summaries, and study history as sessions are added.

### After Reset
Return the dashboard to its empty state after the user confirms the reset.

## Design Goal

I want the website to look like a simple productivity dashboard rather than a complicated school assignment. The design should make it easy to understand study progress at a glance.
