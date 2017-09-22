'use strict'

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const knex = require('../knex');


// function getUserById(googleId){
//   knex
//   .select(
//     'id as user_id',
//     'google_id'
//   )
//   .from('chess_pla_user')
//   .where('google_id', googleId)
//   .then(existingUser  => {
//     console.log('got existing user ', existingUser);
//     return existingUser[0];
//   })
//   .catch(err => {
//     console.log('error: ', error);
//     return null;
//   })
// };
//
// async function createNewUser(newUser){
//   knex('chess_pla_user')
//     .insert({
//       google_id: newUser.googleId,
//
//   })
//   .returning('*')
//   .then(users => {
//     return users[0];
//   })
// };

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    // const existingUser = await getUserById(profile.id);
    knex
    .select(
      'id as user_id',
      'google_id'
    )
    .from('chess_pla_user')
    .where('google_id', profile.id)
    .then(existingUsers  => {
      if (existingUsers.length > 0) {
        console.log('got existing user ', existingUsers[0]);
        return done(null, existingUsers[0]);
      }
      else{
        knex('chess_pla_user')
          .insert({
            google_id: profile.id,

        })
        .returning('*')
        .then(users => {
          console.log('new user: ', users[0]);
          return done(null, users[0]);
        })
        .catch(err => {
          console.log('error inserting new user: ', err);
          return null;
        })
      }
    })
    .catch(err => {
      console.log('error getting existing user: ', err);
      return null;
    })
    // console.log('existing user: ', existingUser);
    // if (existingUser) {
    //   return done(null, existingUser);
    // }
    // else{
    //   const user = await createNewUser({ googleId: profile.id });
    //   console.log('new user: ', user);
    //   done(null, user);
    // }
  }
));
