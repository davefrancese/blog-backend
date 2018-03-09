
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('posts', (table) => {
      table.increments();
      table.string('title');
      table.text('content');
      table.boolean('broadcast');
      table.boolean('read');
      table.integer('users_id')
      table.datetime('created');
      table.datetime('modified');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('posts')
  ])
};
