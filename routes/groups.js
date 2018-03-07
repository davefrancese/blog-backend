const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

/* GET groups listing. */
router.get('/', function(req, res, next) {
  knex('groups').select()
  .then(groups => {
    res.send(groups)
  })
  .catch(err => {
    res.send(err)
  })
});

module.exports = router;
