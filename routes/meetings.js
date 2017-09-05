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
  .then(meetings => {
    console.log('get current meeting route', meetings);
    return res.json(meetings);})
  .catch(err => next(err))
});

router.get('/:id', function(req,res,next){
  knex
    .select(
      'meeting.id',
      'meeting.date',
      'meeting.session_id',
      'player.id',
      'first_name',
      'last_name',
      'alias',
      'current_rank',
      'grade',
      'challenge_game',
      'time_in',
      'time_out'
    )
    .from('meeting')
    .innerJoin('session_player', 'meeting.session_id', 'session_player.session_id')
    .innerJoin('player', 'session_player.player_id', 'player.id')
    .leftJoin('meeting_player', 'meeting.id', 'meeting_player.meeting_id')
    .where('meeting.id', req.params.id)
    .then(function(data){
      console.log('meeting players route', data);
      res.send(data);
  });
});

module.exports = router;
