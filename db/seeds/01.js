exports.seed = function(knex, Promise) {
    return knex('polls').del()
      .then(function () {
        return Promise.all([
          knex('polls').insert({id: 1, admin_name: 'Alice', admin_email: 'example@email.com', question: 'what', vote_link: "vote1.link", result_link: "result1.link"}),
          knex('polls').insert({id: 2, admin_name: 'Bob',admin_email: 'example2@email.com',question: 'how', vote_link: "vote2.link", result_link: "result2.link"}),
          knex('polls').insert({id: 3, admin_name: 'Charlie',admin_email: 'example3@email.com',question: 'wow', vote_link: "vote4.link", result_link: "result1.link"})
        ]);
      });
  };
  
  
