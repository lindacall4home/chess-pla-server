'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/:meeting_id', function(req,res,next){
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
    .where('meeting.id', req.params.meeting_id)
    .then(data => {
      res.send(data);
    })
    .catch(err => next(err))
});


router.post('/',  (req, res, next) => {
  console.log("in post meeting player ", req.body);
  knex('player')
    .from('meeting_player')
    .where({
      meeting_id: req.body.player.meeting_id,
      player_id:  req.body.player.player_id
    })
    .then(players => {
      if(players.length === 0)
      {
        knex('meeting_player')
          .insert({
            meeting_id: req.body.player.meeting_id,
            player_id: req.body.player.player_id,
            challenge_game: req.body.challenge_game,
            time_in: req.body.time_in,
            time_out: req.body.time_out
          })
        .returning('*')
        .then(players => res.json(players[0]))
      }
      else{
        knex('meeting_player')
        .where({
          meeting_id: req.body.player.meeting_id,
          player_id:  req.body.player.player_id
        })
        .update({
          challenge_game: req.body.challenge_game,
          time_in: req.body.time_in,
          time_out: req.body.time_out
        })
        .returning('*')
        .then(players => res.json(players[0]))
        .catch(err => next(err))
      }
    })
    .catch(err => next(err))
});


module.exports = router;
