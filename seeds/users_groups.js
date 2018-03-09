
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_groups').insert([
        {
          id: 100,
          users_id: 100,
          groups_id: 100
        }
      ]);
    });
};
