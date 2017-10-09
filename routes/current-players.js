'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', function(req, res, next){
  knex
  .select(
    'player.id',
    'player.first_name',
    'player.last_name',
    'current_rank',
    'grade'
  )
  .from('session_player')
  .innerJoin('player', 'player.id', 'player_id')
  .innerJoin('session', 'session.id', 'session_id')
  .where('is_current', true)
  .orderBy('current_rank')
  .then(players => {
    res.json(players)})
  .catch(err => next(err))
});

router.post('/', (req, res, next) => {
  console.log('in post new player');
  for(let i = 0; i < req.body.length; i++){
    knex('player')
    .insert({
      first_name: req.body[i].first_name,
      last_name: req.body[i].last_name,
      alias: req.body[i].alias,
      birthday: req.body[i].birthday})
    .returning('*')
    .then(players => {
      knex('session_player')
        .insert({
          session_id: req.body.session_id,
          player_id: players[i].id
        })
        .returning('*')
        .then(res.json('players inserted'))
      })
    .catch(err => next(err))
  }
});

function validate(req, res, next) {
  const errors = [];
  ['first_name', 'last_name', 'alias', 'birthday'].forEach(field => {
    if (!req.body[field] || req.body[field].trim() === '') {
      errors.push({field: field, messages: ["cannot be blank"], sent: req.body})
    }
  })
  if (errors.length) return res.status(422).json({errors})
  next()
};

module.exports = router;
