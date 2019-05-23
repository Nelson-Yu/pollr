
exports.up = function(knex, Promise) {
  return knex.schema.createTable('options', (table) => {
    table.increments();
    table.string('text').notNullable();
    table.integer('rank').notNullable();
    table.integer('poll_id').unsigned().notNullable();

    table.foreign('poll_id').references('polls.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('options');
};
