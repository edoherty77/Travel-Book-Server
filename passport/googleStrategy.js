const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOne(
        {
          googleId: profile.id,
        },
        function (err, user) {
          if (err) return cb(err);
          if (user) {
            // returning user - make sure avatar is current
            user.avatar = profile.photos[0].value;
            user.save(function (err) {
              return cb(null, user);
            });
          } else {
            // we have a new user!
            const newUser = new User({
              avatar = profile.photos[0].value,
              name: profile.displayName,
              email: profile.emails[0].value,
              authId: profile.id,
            });
            newUser.save(function (err) {
              if (err) return cb(err);
              return cb(null, newUser);
            });
          }
        }
      );
    }
  )
);

// called everytime a user logs in
passport.serializeUser(function (user, done) {
  done(null, user._id);
});

// called with every user's request
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
