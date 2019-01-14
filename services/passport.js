const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');

const user = mongoose.model('user');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      user.findOne({ googleId: profile.id })
        .then(existingUser => {
          if (existingUser) {
            // we already have a record with the given googleId/profile id
          } else {
            // we don't have a user record with this ID, make a new record
            new user({ googleId: profile.id }).save();
          }
        });
    }
  )
);


/*
(accessToken, refreshToken, profile, done) => {
  console.log('accessToken', accessToken);
  console.log('refreshToken', refreshToken);
  console.log('profile', profile);
})
*/