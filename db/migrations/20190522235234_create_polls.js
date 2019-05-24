exports.up = function(knex, Promise) {  
  return Promise.all([
    knex.schema.createTable('options', function(table){
    dropForeign('polls.id');
    table.increments('id');
    table.string('text');
    table.integer('rank');
    table.integer('poll_id').unsigned();
    table.foreign('poll_id').references('polls.id').onDelete('cascade');
  })

  ])
};

exports.down = function(knex, Promise) {  
  return Promise.all([
    knex.schema.dropTable('options')
  ])
};