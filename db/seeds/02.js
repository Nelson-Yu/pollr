exports.seed = function(knex, Promise) {
    return knex('options').del()
      .then(function () {
        return Promise.all([
          knex('options').insert({poll_id: 1, rank: '3', text: 'what',}),
          knex('options').insert({poll_id: 3,rank: '2',text: 'how'}),
          knex('options').insert({poll_id: 2,rank: '4',text: 'wow' })
        ]);
      });
  };
  
