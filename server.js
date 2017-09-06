'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const app = express();

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use('/api/current-session', require('./routes/current-session'));
app.use('/api/meetings', require('./routes/meetings'));
app.use('/api/current-players', require('./routes/current-players'));
app.use('/api/meeting-players', require('./routes/meeting-players'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('chess-pla-client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'chess-pla-client', 'build', 'index.html'));
  });
}


app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
