const User = require('../models/User.js')
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const initializingPassport = (passport) => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.CALLBACK_URL
        }, async(accessToken, refreshToken, profile, cb) => {
            try {
                const user = await User.findOne({ googleId: profile.id });
                if (user) {
                    //user exist in the database, simply login
                    cb(null, user);
                } else {
                    //user does not exist in the database, creating new user and logging in
                    const newUser = await User.create({
                        googleId: profile.id,
                        displayName: profile.displayName,
                        email: profile.emails[0].value
                    });
                    cb(null, newUser);
                }
            } catch (err) {
                console.log(err.message);
            }
        })
    )

    passport.serializeUser((user, cb) => {
        cb(null, user);
    })

    passport.deserializeUser((obj, cb) => {
        cb(null, obj)
    })
}

module.exports = initializingPassport;