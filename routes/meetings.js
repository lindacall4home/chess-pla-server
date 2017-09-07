'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next){
  knex
  .select(
    'session.id as session_id',
    'session_name',
    'meeting.id as meeting_id',
    'date'
  )
  .from('session')
  .innerJoin('meeting', 'session.id', 'meeting.session_id')
  .where('session.is_current', true)
  .then(meetings =>  res.json(meetings))
  .catch(err => next(err))
});

module.exports = router;
