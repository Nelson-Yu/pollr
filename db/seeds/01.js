exports.seed = function(knex, Promise) {
    return knex('polls').del()
      .then(function () {
        return Promise.all([
          knex('polls').insert({
            id: 1,
            admin_name: 'Betty',
            admin_email: 'example1@email.com',
            question: 'What do you want for dinner tonight?',
            vote_link: "1",
            result_link: "1"
          }),
          knex('polls').insert({
            id: 2,
            admin_name: 'Nelson',
            admin_email: 'example2@email.com',
            question: 'Who is your favourite instructor?',
            vote_link: "2",
            result_link: "2"
          }),
          knex('polls').insert({
            id: 3,
            admin_name: 'Turner',
            admin_email: 'example3@email.com',
            question: 'When should I have lunch?',
            vote_link: "3",
            result_link: "3"
          })
        ]);
      });
  };


