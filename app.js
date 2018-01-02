var express = require('express')
var app = express()
var bodyParser=require('body-parser')
var cookieParser=require('cookie-parser')
var passport = require('passport')
var session = require('express-session')

var port = process.env.PORT || 5000

var nav = [{
    Link: '/Books',
    Text: 'Book'
},
{
    Link: '/Authors',
    Text: 'Author'
}]

var bookRouter = require('./src/routes/bookRoutes')(nav)
var adminRouter = require('./src/routes/adminRoutes')(nav)
var authRouter = require('./src/routes/authRoutes')(nav)

app.use(express.static('public'))
app.set('views', './src/views')

//var  handlebars = require('express-handlebars')
//app.engine('.hbs',handlebars({extname: '.hbs'}))

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cookieParser())
app.use(session({secret : 'library'}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/Books', bookRouter)
app.use('/Admin', adminRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
    res.render('index', {
        title: 'hello yash', nav:
        [{
            Link: '/Books',
            Text: 'Books'
        },
        {
            Link: '/Authors',
            Text: 'Authors'
        }]
    })
})

app.listen(port, () => console.log('running on ' + port))