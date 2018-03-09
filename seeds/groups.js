
exports.seed = function(knex, Promise) {
  return knex('groups').del()
    .then(function () {
      return knex('groups').insert([
        {
          id: 100,
          name: 'developers',
          posts_id: 100,
          created: new Date(),
          modified: new Date()
        },
        {
          id: 200,
          name: 'marketing',
          posts_id: 200,
          created: new Date(),
          modified: new Date()
        },
        {
          id: 300,
          name: 'general',
          posts_id: 300,
          created: new Date(),
          modified: new Date()
        },
      ]);
    });
};
