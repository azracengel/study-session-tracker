## What I am building
A study session tracker that logs how long I studied each subject and shows my weekly totals.

## Who it is for
Me — I lose track of how much time I actually spend studying vs. how much I think I do.

## What it remembers
A list of study sessions, each with: subject name, duration in minutes, and date.

## Where the data lives
localStorage — so my sessions survive a page refresh.

## What each action changes
- Log a session: a new session object is added to the sessions array; that subject's weekly total goes up by the duration.
- Delete a session: the session is removed from the array; that subject's total goes down.
- Reset all: the sessions array is cleared; all totals return to zero.

## Features
1. Log a study session (subject + minutes)
2. See total minutes per subject for the current week
3. See total hours studied this week overall
4. Delete individual sessions
5. Reset / clear all data

## What I do not know yet
- How to filter sessions by the current week using dates
- How localStorage.setItem and getItem work with arrays (JSON.stringify / JSON.parse)