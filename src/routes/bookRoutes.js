var express = require('express')

var bookRouter = express.Router()
var MongoClient = require('mongodb').MongoClient
var objectId = require('mongodb').ObjectId


var nav = [{
    Link: '/Books',
    Text: 'Book'
},
{
    Link: '/Authors',
    Text: 'Author'
}]

var router = (nav) => {
    bookRouter.route('/')
        .get((req, res) => {
            var url = 'mongodb://localhost:27017/libraryApp'

            MongoClient.connect(url, (err, db) => {
                var collection = db.collection('books')

                collection.find({}).toArray((err, results) => {

                    res.render('books', {
                        title: 'Books',
                        nav: nav,
                        books: results
                    })
                })

            })

        })

    return bookRouter

}



bookRouter.route('/:id')
    .get((req, res) => {
        var id = new objectId(req.params.id)

        var url = 'mongodb://localhost:27017/libraryApp'

        MongoClient.connect(url, (err, db) => {
            var collection = db.collection('books')

            collection.findOne({ _id: id },

                (err, results) => {

                    res.render('book', {
                        title: 'Book',
                        nav: nav,
                        book: results
                    })
                })


        })

    })




module.exports = router