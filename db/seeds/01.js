exports.seed = function(knex, Promise) {
    return knex('options').del()
  };


