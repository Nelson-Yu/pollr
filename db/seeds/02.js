exports.seed = function(knex, Promise) {
    return knex('options').del()
      .then(function () {
        return Promise.all([
          knex('options').insert({id: 1, poll_id: 1, rank: '5', text: 'Pizza',}),
          knex('options').insert({id: 2, poll_id: 1, rank: '10', text: 'Sushi'}),
          knex('options').insert({id: 3, poll_id: 1, rank: '6', text: 'Burgers'}),
          knex('options').insert({id: 4, poll_id: 1, rank: '2', text: 'Salad'}),
          knex('options').insert({id: 5, poll_id: 1, rank: '3', text: 'Noodles'}),
          knex('options').insert({id: 6, poll_id: 2, rank: '8', text: 'KV',}),
          knex('options').insert({id: 7, poll_id: 2, rank: '2', text: 'Don'}),
          knex('options').insert({id: 8, poll_id: 2, rank: '9', text: 'Nima'}),
          knex('options').insert({id: 9, poll_id: 2, rank: '3', text: 'Travis'}),
          knex('options').insert({id: 10, poll_id: 2, rank: '5', text: 'Karl'}),
          knex('options').insert({id: 11, poll_id: 3, rank: '5', text: '11:00',}),
          knex('options').insert({id: 12, poll_id: 3, rank: '5', text: '12:00'}),
          knex('options').insert({id: 13, poll_id: 3, rank: '3', text: '1:00'}),
          knex('options').insert({id: 14, poll_id: 3, rank: '9', text: '2:00'}),
          knex('options').insert({id: 15, poll_id: 3, rank: '7', text: 'No Lunch'})

        ]);
      });
  };

