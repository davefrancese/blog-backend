
exports.seed = function(knex, Promise) {
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([
        {
          id: 100,
          title: 'How to develope a blog',
          content: 'If you want to develope a blog for your team...',
          broadcast: false,
          read: false,
          users_id: 100,
          created: new Date(),
          modified: new Date()
        },
        {
          id: 200,
          title: 'How to market your product',
          content: 'If you want to market your product well...',
          broadcast: false,
          read: false,
          users_id: 300,
          created: new Date(),
          modified: new Date()
        },
        {
          id: 300,
          title: 'How to be productive',
          content: 'If you want you and your team to be productive...',
          broadcast: true,
          read: false,
          users_id: 200,
          created: new Date(),
          modified: new Date()
        },
      ]);
    });
};
