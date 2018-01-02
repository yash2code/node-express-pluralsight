var express = require('express')
var adminRouter = express.Router()
var MongoClient = require('mongodb').MongoClient

var books = [
    {
        title: 'book 1',
        author: 'author 1'
    },
    {
        title: 'book 2',
        author: 'author 2'
    },
    {
        title: 'book 3',
        author: 'author 3'
    },
    {
        title: 'book 4',
        author: 'author 4'
    }
]

var router = (nav) => {

    adminRouter.route('/addBooks')
        .get((req, res) => {

            var url = 'mongodb://localhost:27017/libraryApp'

            MongoClient.connect(url, (err, db) => {

                //console.log("Connected correctly to server")
                var collection = db.collection('books')

                collection.insertMany(books, (err, results) => {
                    res.send(results)
                })
                db.close()
            })
        })

    return adminRouter

}

module.exports = router