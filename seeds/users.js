
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 100,
          username: 'dfrancese',
          created: new Date(),
          modified: new Date()
        },
        {
          id: 200,
          username: 'jwyse',
          created: new Date(),
          modified: new Date()
        },
        {
          id: 300,
          username: 'hschwartz',
          created: new Date(),
          modified: new Date()
        }
      ]);
    });
};
