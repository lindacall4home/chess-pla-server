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
    'alias'
  )
  .from('session_player')
  .innerJoin('player', 'player.id', 'player_id')
  .innerJoin('session', 'session.id', 'session_id')
  .where('isCurrent', true)
  .then(players => res.json(players))
  .catch(err => next(err))
});

router.post('/', validate, (req, res, next) => {
  console.log('in post');
  knex('player')
    .insert({first_name: req.body.first_name, last_name: req.body.last_name, alias: req.body.alias, birthday: req.body.birthday})
    .returning('*')
    .then(players => res.json(players[0]))
    .catch(err => next(err))
});

function validate(req, res, next) {
  console.log(req.body);
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
