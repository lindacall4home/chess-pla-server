'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/:id', function(req,res,next){
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
      'black_player.last_name as white_last_name',
      'black_player.alias as white_alias',
      'black_player_rank',
      'white_player_rank',
      'board_num',
      'game_result'
    )
    .from('meeting')
    .innerJoin('game', 'meeting.id', 'game.meeting_id')
    .innerJoin('player as black_player', 'black_player_id', 'black_player.id')
    .innerJoin('player as white_player', 'white_player_id', 'white_player.id')
    .where('meeting.id', req.params.id)
    .then(data => {
      console.log('sending meeting games ', data);
      res.send(data);
    })
    .catch(err => next(err))
});


router.post('/',  (req, res, next) => {
  console.log("in post game ", req.body);
  knex
    .insert(req.body, 'id')
    .into('game')
    .then(ids => res.json(ids))
    .catch(err => next(err))
});

router.patch('/:id',  (req, res, next) => {
  console.log("in patch game ", req.body);
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
