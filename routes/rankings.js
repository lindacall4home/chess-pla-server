'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');


router.post('/',  (req, res, next) => {
  knex('ranking_history')
    .where('meeting_id', req.body.meetingId)
    .del()
    .then(
      knex
        .insert(req.body.rankings)
        .into('ranking_history')
        .then(() => res.json('inserted rankings'))
        .catch(err => {
          console.log('error deleting rankings: ', err);
          next(err)
        })
    )
    .catch(err => {
      console.log('error inserting rankings: ', err);
      next(err)
    })
});

module.exports = router;
