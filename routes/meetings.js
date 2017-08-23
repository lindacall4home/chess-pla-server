'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  // knex('meetings')
  // .then(meetings => res.json(meetings))
  // .catch(err => next(err))
});
