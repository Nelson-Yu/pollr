
exports.up = function(knex, Promise) {
  return knex.schema.createTable('polls', (table) => {
    table.increments();
    table.string('admin_name', 50)
    table.string('admin_email', 50)
    table.string('question')
    table.string('vote_link')
    table.string('result_link')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('polls');
};
