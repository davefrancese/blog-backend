
exports.seed = function(knex, Promise) {
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([
        {
          content: 'This is a test blog post. Testing 1, 2.',
          broadcast: false,
          created: new Date(),
          modified: new Date()
        }
      ]);
    });
};
