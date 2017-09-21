'use strict';

const express = require('express');
require('./services/passport');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const app = express();

// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const keys = require('./config/keys');

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./routes/auth')(app);

// passport.use(new GoogleStrategy({
//     clientID: keys.googleClientID,
//     clientSecret: keys.googleClientSecret,
//     callbackURL: '/auth/google/callback'
//   },
//   accessToken => {
//     console.log(accessToken)
//   }
// ));
//
// app.get(
//   '/auth/google',
//   passport.authenticate('google', {
//     scope: ['profile', 'email']
//   })
// );
//
// app.get('/auth/google/callback', passport.authenticate('google'));


app.use(bodyParser.json());
app.use('/api/current-session', require('./routes/current-session'));
app.use('/api/meetings', require('./routes/meetings'));
app.use('/api/current-players', require('./routes/current-players'));
app.use('/api/meeting-players', require('./routes/meeting-players'));
app.use('/api/meeting-games', require('./routes/meeting-games'));

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
