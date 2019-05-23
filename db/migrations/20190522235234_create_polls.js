
exports.up = function(knex, Promise) {
  return knex.schema.createTable('polls', (table) => {
    table.increments();
    table.string('admin_name', 50).notNullable();
    table.string('admin_email', 50).notNullable();
    table.string('question').notNullable();
    table.string('vote_link').notNullable();
    table.string('result_link').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('polls');
};
