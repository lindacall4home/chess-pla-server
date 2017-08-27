'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next){
  knex
  .select(
    'player.id',
    'current_rank',
    'alias'
  )
  .from('session_player')
  .innerJoin('player', 'player.id', 'player_id')
  .innerJoin('session', 'session.id', 'session_id')
  .where('isCurrent', true)
  .then(players => res.json(players))
  .catch(err => next(err))
});

module.exports = router;
