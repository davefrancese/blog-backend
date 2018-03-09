
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('groups', (table) => {
      table.increments();
      table.string('name');
      table.integer('posts_id')
      table.datetime('created');
      table.datetime('modified');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('groups')
  ])
};
