var express = require('express')
var authRouter = express.Router()
var MongoClient = require('mongodb').MongoClient

var router = (nav) => {
    
        authRouter.route('/signup')
            .post((req, res) => {
    
               //console.log(req.body);
             /*  var url = 'mongodb://localhost:27017/libraryApp'
               MongoClient.connect(url, (err, db) => {
                var collection = db.collection('users')
                var user = {
                    username: req.body.userName,
                    password: req.body.password
                }

                collection.insert(user, (err, results) => {
                    req.login(results, () => res.redirect('/auth/profile'))


                })

               }) */

               req.login(req.body, () => res.redirect('/auth/profile'))
            });
    

        authRouter.route('/profile')
            .get((req, res) => {
                console.log(req.user)
            })
        return authRouter
    
    }

    module.exports = router