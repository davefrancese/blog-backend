const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('users').select()
  .then(users => {
    res.send(users)
  })
  .catch(err => {
    res.send(err)
  })
});

module.exports = router;
