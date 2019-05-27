# Pollr

Pollr is a decision-making app that creates polls for a group to collectively make a democratic decision.

## Problem

Suppose your group is stubbornly debating on who is the best Avenger. Everyone have their own separate opinions and ranking on who is the best. No consensus can be made amongst your group.

## Solution

Use Pollr to create a poll on what to eat tonight. Pollr uses [Borda Count](https://en.wikipedia.org/wiki/Borda_count) to allocate points to each option based on the rank given by the voter. Once everyone in your group participates in the poll, check the results to see the top choice.

## Final Product
!["Screenshot of Pollr Landing Page"](https://github.com/turnerschumann/decision-maker/blob/master/docs/Landing.png)
!["Screenshot of Pollr Create Poll Page"](https://github.com/turnerschumann/decision-maker/blob/master/docs/Create-Poll.png)
!["Screenshot of Pollr Submit User Page"](https://github.com/turnerschumann/decision-maker/blob/master/docs/Admin-User.png)
!["Screenshot of Pollr Admin Links Page"](https://github.com/turnerschumann/decision-maker/blob/master/docs/Admin-Links.png)
!["Screenshot of Pollr Vote Page"](https://github.com/turnerschumann/decision-maker/blob/master/docs/Results.png)
!["Screenshot of Pollr Results Page"](https://github.com/turnerschumann/decision-maker/blob/master/docs/Voting-Page.png)

## Setup
1. Create your own empty repo on GitHub
2. Clone this repository
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
6. Run the server: `npm run local`
7. Visit `http://localhost:8080/`

## Usage
1. Click on "Start" button on `http://localhost:8080/`
2. Enter a question and its options, click on "Create Poll" button 
3. Enter your name and email, click on "Submit"
4. Share the vote-link with your group
5. Vote by dragging and dropping the options in order to rank best(top) to worst(bottom)
6. Click on "Results" to see the outcome of your group's vote

## Dependencies
- Node 5.10.x or above
- NPM 3.8.x or above
- Body Parser
- Dotenv
- EJS
- Express
- Jquery-UI-dist
- Knex
- Knex-Logger
- Mailgun-js
- Morgan
- Node-Sass-Middleware
- PostgreSQL
