Pollr
============= 

#### Contributors: [Nelson Yu](https://github.com/Nelson-Yu), [Betty Qu](https://github.com/betttyquu), [Turner Schumann](https://github.com/turnerschumann)


## Overview

Pollr is a decision making application designed for users to agree on a democratic decision.

#### Problem

Suppose your group is stubbornly debating on who is the best Avenger. Everyone have their own separate opinions and ranking on who is the best. No consensus can be made amongst your group.

#### Solution

Use Pollr to create a poll on who is the best Avenger. Pollr uses [Borda Count](https://en.wikipedia.org/wiki/Borda_count) to allocate points to each option based on the rank given by the voter. Once everyone in your group participates in the poll, check the results to see the top choice.

## Final Product
!["Screenshot of Pollr Landing Page"](https://github.com/Nelson-Yu/pollr/blob/master/docs/landing.png)
!["Screenshot of Pollr Create Poll Page"](https://github.com/Nelson-Yu/pollr/blob/master/docs/create-poll.png)
!["Screenshot of Pollr Submit User Page"](https://github.com/Nelson-Yu/pollr/blob/master/docs/admin-register.png)
!["Screenshot of Pollr Admin Links Page"](https://github.com/Nelson-Yu/pollr/blob/master/docs/admin-page.png)
!["Screenshot of Pollr Vote Page"](https://github.com/Nelson-Yu/pollr/blob/master/docs/voting.gif)

## Usage

Create a Poll:
1. Navigate to `http://localhost:8080/`
2. Click on "Start" button
3. Enter a question and its options, click on "Create Poll" button 
4. Enter your name and email, click on "Submit"
5. Share the vote-link with your group

Vote in Poll:
1. Navigate to the voting page
2. Vote by dragging and dropping the options in order to rank best(top) to worst(bottom)
3. Click on "Results" to see the outcome of your group's vote

## Tech Stack

Back-end
* NodeJS
* Express
* Knex

Front-end
* jQuery
* EJS
* SASS

Database
* PostgreSQL

## Setup
1. Create your own empty repo on GitHub
2. Clone this repository
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
6. Run the server: `npm run local`
7. Visit `http://localhost:8080/`

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
