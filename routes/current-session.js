'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next){
  knex
  .select('session.id as session_id',
          'session_name',
          'is_current',
          'game.id as game_id',
          'black_player_id',
          'black_player_rank',
          'white_player_id',
          'white_player_rank',
          'meeting_id',
          'board_num',
          'game_result')
  .from('session')
  .leftOuterJoin('meeting', 'session_id', 'meeting.session_id')
  .leftOuterJoin('game', 'meeting.id', 'game.meeting_id')
  .where('is_current', true)
  .then(session => res.json(session))
  .catch(err => next(err))
});

module.exports = router;
