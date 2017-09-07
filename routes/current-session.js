'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next){
  knex
  .select('session.id as session_id',
          'session_name',
          'is_current',
          'game_result')
  .from('session')
  .leftOuterJoin('meeting', 'session_id', 'meeting.session_id')
  .leftOuterJoin('game', 'meeting.id', 'game.meeting_id')
  .where('is_current', true)
  .then(session => res.json(session[0]))
  .catch(err => next(err))
});

module.exports = router;
