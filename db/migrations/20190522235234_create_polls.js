exports.up = function(knex, Promise) {
  return Promise.all([
  knex.schema.createTable('polls', (table) => {
    table.increments('id');
    table.string('admin_name', 50);
    table.string('admin_email', 50);
    table.string('question');
    table.string('vote_link');
    table.string('result_link');
  })
  ])
};

exports.down = function(knex, Promise) {  
  return Promise.all([
    knex.schema.dropTable('polls')
  ])
};