exports.seed = function(knex, Promise) {
    return knex('polls').del()
  };
