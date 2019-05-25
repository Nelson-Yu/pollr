require('dotenv').config();
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  }
});

// sorting rank by highest first
const sorted = function() {
  knex.select('rank', 'text').from('options').orderBy('rank', 'desc')//.where({ poll_id: 1 })
  .asCallback(function (err, rows) {
    if (err) return console.error(err);
    console.log(rows);
  });
}

function updateRanks(optionIDs) {
  const promises = optionIDs.map((element, index) => {
    let amount = optionIDs.length - index;
    return knex('options').increment('rank', amount).where({id: element})
    .returning(['rank','id'])
  })
  return Promise.all(promises);
}

// updating ranks
knex.select('rank', 'text', 'id').from('options').orderBy('id')//.where({ poll_id: 1 })
  .asCallback(function (err, rows) {
    if (err) return console.error(err);
    let submission = [
      rows[3].id,
      rows[4].id,
      rows[1].id,
      rows[2].id,
      rows[0].id,
    ]
    updateRanks(submission).then(results => {
      console.log(results);
      sorted();
    })


    .catch(err => {
      // ...
    })
    })


  