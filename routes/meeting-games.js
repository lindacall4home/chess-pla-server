'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/:meeting_id', function(req,res,next){

  knex
    .select(
      'meeting.id as meeting_id',
      'game.id as game_id',
      'black_player_id',
      'black_player.first_name as black_first_name',
      'black_player.last_name as black_last_name',
      'black_player.alias as black_alias',
      'white_player_id',
      'white_player.first_name as white_first_name',
      'white_player.last_name as white_last_name',
      'white_player.alias as white_alias',
      'black_player_rank',
      'white_player_rank',
      'board_num',
      'game_result'
    )
    .from('meeting')
    .innerJoin('game', 'meeting.id', 'game.meeting_id')
    .innerJoin('player as black_player', 'black_player_id', 'black_player.id')
    .innerJoin('player as white_player', 'white_player_id', 'white_player.id')
    .where('meeting.id', req.params.meeting_id)
    .orderBy('black_player_rank')
    .then(data => {
      res.send(data);
    })
    .catch(err => next(err))
});


router.post('/',  (req, res, next) => {
  console.log('in post pairings games: ', req.body.games);
  console.log('in post pairings meetingId: ', req.body.meetingId);
  knex('game')
    .where('meeting_id', req.body.meetingId)
    .del()
    .then(
      knex
        .insert(req.body.games)
        .into('game')
        .then(() => res.json('inserted pairings'))
        .catch(err => {
          console.log('error deleting pairings: ', err);
          next(err)
        })
    )
    .catch(err => {
      console.log('error inserting pairings: ', err);
      next(err)
    })
});

router.patch('/:id',  (req, res, next) => {
  knex('game')
  .where({
    id: req.body.game.game_id
  })
  .update({
    result: req.body.game_result
  })
  .returning('*')
  .then(games => res.json(games[0]))
  .catch(err => next(err))
});

module.exports = router;
