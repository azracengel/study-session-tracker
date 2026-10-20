
# Agent Rules — Study Session Tracker

## Technology
- Use plain HTML, CSS, and JavaScript only.
- Do not use React, Tailwind, frameworks, libraries, or CDN imports.
- Do not use a database, external API, CSV, or separate JSON file.
- The website must work on GitHub Pages.

## File Structure
- index.html contains the HTML structure.
- style.css contains all website styling.
- app.js contains the JavaScript functionality.
- Keep all three files in the main project folder.

## Data and State
- Store study sessions in a JavaScript array called sessions.
- Each session contains an ID, subject, duration, and date.
- Use localStorage with JSON.stringify() and JSON.parse().
- Data must remain saved after refreshing the page.

## Functionality
- Users can add study sessions.
- Calculate total study time for the current week.
- Calculate study time for each subject.
- Display session history.
- Allow sorting and deleting sessions.
- Include a reset button with an in-page confirmation.
- Update the dashboard immediately when data changes.

## User Experience
- Follow the colors and layout described in DESIGN.md.
- Display errors below the relevant input fields.
- Do not use alert() or window.confirm().
- Make the website responsive on mobile.
- Use semantic HTML and accessible labels.

## JavaScript Rules
- Keep the code simple and readable.
- Use descriptive function names.
- Add comments explaining important functions.
- Call saveToStorage() after changes to session data.
- Call redrawUI() whenever the displayed data needs updating.
