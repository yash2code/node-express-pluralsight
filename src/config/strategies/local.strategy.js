var passport = require('passport')
LocalStrategy = require('passport-local').LocalStrategy

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password'
    }, (username, password, done) => {
        var user = {
            username: username,
            password: password
        }
        done(null, user)
    }

))
}