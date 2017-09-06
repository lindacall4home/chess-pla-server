'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

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
