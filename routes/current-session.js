'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next){
  knex('session')
  .where('isCurrent', true)
  .then(session => res.json(session[0]))
  .catch(err => next(err))
});

module.exports = router;
