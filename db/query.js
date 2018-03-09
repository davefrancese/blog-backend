const knex = require('./knex')

// cRud - POSTS
let getAllPosts = () => {
  return knex('posts').select()
}

let getUsersPosts = (id) => {
  return knex('posts').select().where('users_id', id)
}

let getGroupsPosts = (gId) => {
  return knex('posts').select().where('id', gId)
}

// cRud - USERS
let getAllUsers = () => {
  return knex('users').select()
}

let getUserById = (id) => {
  return knex('users').select().where('id', id)
}

// cRud - GROUPS
let getAllGroups = () => {
  return knex('groups').select()
}

let getGroupById = (id) => {
  return knex('groups').select().where('id', id)
}

let getGroupUsers = (users_id) => {
  return knex('users_groups').select().where('users_id', users_id).innerJoin('groups', 'groups_id', 'groups.id')
}

// Crud - POSTS
let postBlogPost = (id, post) => {
  return knex('posts').insert(post).where('users_id', id)
  .innerJoin('users', 'users_id', 'users.id').returning('*')
}


module.exports = {
  getAllPosts,
  getAllUsers,
  getAllGroups,
  getUsersPosts,
  getGroupById,
  getGroupsPosts,
  getUserById,
  getGroupUsers,
  postBlogPost,
}
