
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users_posts', (table) => {
      table.increments();
      table.integer('post_id');
      table.integer('user_id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users_posts')
  ])
};
