
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('posts_groups', (table) => {
      table.increments();
      table.integer('post_id');
      table.integer('group_id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('posts_groups')
  ])
};
