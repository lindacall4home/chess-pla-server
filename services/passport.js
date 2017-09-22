'use strict'

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const knex = require('../knex');

async function getUserById(googleId){
  return await knex
  .select(
    'id as user_id',
    'google_id'
  )
  .from('chess_pla_user')
  .where('google_id', googleId);
};

async function createNewUser(newUser){
  return await knex('chess_pla_user')
    .insert({
      google_id: newUser.googleId,
  })
  .returning('*');
};

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUsers = await getUserById(profile.id);
    if (existingUsers.length > 0) {
        return done(null, existingUsers[0]);
    }
    else{
      const user = await createNewUser({ googleId: profile.id });
      return done(null, user);
    }
  }
));
