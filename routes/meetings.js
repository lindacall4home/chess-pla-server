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

router.get('/:id', function(req,res,next){
  knex
    .select(
      'meeting.id as meeting_id',
      'meeting.date',
      'meeting.session_id',
      'player.id as player_id',
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
    .leftOuterJoin('meeting_player', function () {
      this.on('meeting.id', '=', 'meeting_player.meeting_id')
      .andOn('player.id', '=', 'meeting_player.player_id')
    })
    .where('meeting.id', req.params.id)
    .then(data => {
      console.log('sending meeting players ', data);
      res.send(data);
    })
    .catch(err => next(err))
});
//
// router.post('/', validate, (req, res, next) => {
//   knex('player')
//     .insert({
//       first_name: req.body.first_name,
//       last_name: req.body.last_name,
//       alias: req.body.alias,
//       birthday: req.body.birthday})
//     .returning('*')
//     .then(players => {
//       knex('session_player')
//         .insert({
//           session_id: req.body.session_id,
//           player_id: players[0].id
//         })
//         .returning('*')
//         .then(sessions => res.json(players[0]))
//       })
//     .catch(err => next(err))
// });

module.exports = router;
