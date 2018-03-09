const express = require('express')
const router = express.Router()
const query = require('./db/query')

// POSTS
router.get('/posts', (req, res) => {
  query.getAllPosts()
  .then(posts => {
    res.send(posts)
  })
})

router.get('/posts/:id', (req, res) => {
  let id = req.params.id
  query.getUsersPosts(id)
    .then(posts => {
      res.send(posts)
    })
})

router.get('/posts/groups/:id', (req, res) => {
  let id = req.params.id
  query.getGroupById(id)
    .then(group => {
      let gId = group[0].posts_id
      query.getGroupsPosts(gId)
      .then(posts => {
        res.send(posts)
      })
    })
})

router.post('/posts', (req, res) => {
  let id = req.params.id
  let post = req.body
  query.postBlogPost(id, post)
  .then(post => {
    res.send(post)
  })
})

// USERS
router.get('/users', (req, res) => {
  query.getAllUsers()
  .then(users => {
    res.send(users)
  })
})

router.get('/users/:id', (req, res) => {
  let id = req.params.id
  query.getUserById(id)
  .then(user => {
    res.send(user)
  })
})

//GROUPS
router.get('/groups', (req, res) => {
  query.getAllGroups()
  .then(groups => {
    res.send(groups)
  })
})

router.get('/groups/users/:id', (req, res) => {
  let users_id = req.params.id
  query.getGroupUsers(users_id)
  .then(data => {
    res.send(data)
  })
})


module.exports = router;
