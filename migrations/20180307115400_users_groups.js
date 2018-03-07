
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users_groups', (table) => {
      table.increments();
      table.integer('user_id');
      table.integer('group_id');
      table.datetime('created');
      table.datetime('modified');
      table.datetime('deleted');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users_groups')
  ])
};
