exports.seed = function(knex, Promise) {
    return knex('options').del()
      .then(function () {
        return Promise.all([
          knex('options').insert({poll_id: 1, rank: '5', text: 'Pizza',}),
          knex('options').insert({poll_id: 1, rank: '10', text: 'Sushi'}),
          knex('options').insert({poll_id: 1, rank: '6', text: 'Burgers'}),
          knex('options').insert({poll_id: 1, rank: '2', text: 'Salad'}),
          knex('options').insert({poll_id: 1, rank: '3', text: 'Noodles'}),
          knex('options').insert({poll_id: 2, rank: '8', text: 'KV',}),
          knex('options').insert({poll_id: 2, rank: '2', text: 'Don'}),
          knex('options').insert({poll_id: 2, rank: '9', text: 'Nima'}),
          knex('options').insert({poll_id: 2, rank: '3', text: 'Travis'}),
          knex('options').insert({poll_id: 2, rank: '5', text: 'Karl'}),
          knex('options').insert({poll_id: 3, rank: '5', text: '11:00',}),
          knex('options').insert({poll_id: 3, rank: '5', text: '12:00'}),
          knex('options').insert({poll_id: 3, rank: '3', text: '1:00'}),
          knex('options').insert({poll_id: 3, rank: '9', text: '2:00'}),
          knex('options').insert({poll_id: 3, rank: '7', text: 'No Lunch'})

        ]);
      });
  };

