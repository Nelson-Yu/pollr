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

knex('polls').insert({
  admin_name: 'admin1', 
  admin_email: 'email111@11.com',
  question: 'What do you want to eat?',
  vote_link: "xxxx.com",
  result_link: "eeeeeeelllo.com"
})
.asCallback(function(err, res) {
  if (err) return console.log(err);
  console.log(res);
});

// knex('options').insert({
//   text: 'options', 
//   rank: '5',
// })
// .asCallback(function(err, res) {
//   if (err) return console.log(err);
//   console.log(res);
// });
