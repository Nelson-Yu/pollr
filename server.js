"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));



let pollID;

////////////// Functions ///////////////////

function generateRandomString() {
  const result = Math.random().toString(36).substr(2, 6);
  return result;
}

////////////// GET routes ///////////////////

// Home page
// app.get("/vote", (req, res) => {
//   res.render("vote");
// });

app.get('/vote/:id', (req, res) => {
  let templateVars= {};

  knex
    .select('options.id', 'polls.question', 'options.text', 'polls.vote_link')
    .from('options')
    .leftJoin('polls', 'polls.id', 'options.poll_id')
    .where('poll_id', req.params.id)
    .then((results) => {
      templateVars = {
        options: results
      }
    })
    .then(() => res.render('vote', templateVars));
});

app.get("/result", (req, res) => {
  res.render("result");
});

app.get("/", (req, res) => {
  res.render("index");
});

////////////// POST routes ///////////////////

app.post("/create", (req, res) => {
  const options = [];
  options.push(req.body.option1);
  options.push(req.body.option2);
  options.push(req.body.option3);
  options.push(req.body.option4);
  options.push(req.body.option5);
  const urlID = generateRandomString();

  knex('polls')
    .insert({question: req.body.question, vote_link: urlID, result_link: urlID })
    .returning('id')
    .then((id) => {
      options.forEach(function(element){
        console.log("The id isssss: " + id[0]);
        pollID = id[0]
        return knex('options')
        .insert({ poll_id: id[0], text: element})
        .then((id)=>{
          return;
        });
      });
    // knex.destroy();
    });
});

app.post("/user", (req, res) => {
  console.log("pollID in /user is " + pollID)

  knex('polls')
    .where('id', '=', pollID)
    .update({admin_name: req.body.name, admin_email: req.body.email})
    .asCallback(function(err, rows) {
      if (err) return console.error(err);
      knex.destroy();
    });
});



app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});









