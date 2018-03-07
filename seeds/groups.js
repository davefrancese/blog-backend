
exports.seed = function(knex, Promise) {
  return knex('groups').del()
    .then(function () {
      return knex('groups').insert([
        {
          name: 'developers',
          created: new Date(),
          modified: new Date()
        }
      ]);
    });
};
