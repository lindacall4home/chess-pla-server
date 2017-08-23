'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
// app.use('/api/meetings', require('./routes/meetings'))

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
