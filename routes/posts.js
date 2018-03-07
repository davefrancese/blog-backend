const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

/* GET posts listing. */
router.get('/', function(req, res, next) {
  knex('posts').select()
  .then(posts => {
    res.send(posts)
  })
  .catch(err => {
    res.send(err)
  })
});

module.exports = router;
