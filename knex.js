'use strict'

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);
