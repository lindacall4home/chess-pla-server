'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next){
  knex('meeting')
  .then(meetings => res.json(meetings))
  .catch(err => next(err))
});

module.exports = router;
