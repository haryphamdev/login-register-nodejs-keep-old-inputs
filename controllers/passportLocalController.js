//import passportLocal from "passport-local";
const passportLocal = require('passport');
//import passport from "passport";
const passport = require('passport');
//import loginService from "../services/loginService";
const loginService = require('../services/loginService');

//let LocalStrategy = passportLocal.Strategy;
const LocalStrategy   = require('passport-local').Strategy

let initPassportLocal = () => {
    passport.use(new LocalStrategy({
            usernameField: 'email_address',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req, email_address, password, done) => {
            try {
                await loginService.findUserByEmail(email_address).then(async (user) => {
                    if (!user) {
                        return done(null, false, req.flash("errors", `This user email "${email_address}" doesn't exist`));
                    }
                    if (user) {
                        let match = await loginService.comparePassword(password, user);
                        if (match === true) {
                            return done(null, user, null)
                        } else {
                            return done(null, false, req.flash("errors", match)
                            )
                        }
                    }
                });
            } catch (err) {
                console.log(err);
                return done(null, false, { message: err });
            }
        }));

};

passport.serializeUser((user, done) => {
    done(null, user.user_id);
});

passport.deserializeUser((user_id, done) => {
    loginService.findUserById(user_id).then((user) => {
        return done(null, user);
    }).catch(error => {
        return done(error, null)
    });
});

module.exports = initPassportLocal;