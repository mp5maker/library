const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const http = require('http')
const User = require('./models/User')

const main = async () => {
    const app = express()
    const url = "mongodb://localhost:27017"
    const dbName = "my-test-website"

    const databaseURI = `${url}/${dbName}`
    mongoose.connect(databaseURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        .then((result) => app.listen(3000))
        .catch((error) => console.log(error))


    /* Middlewares */
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(cookieParser())
    app.use(expressSession({
        secret: `open-secret`,
        saveUninitialized: false,
        resave: false
    }))
    app.use(function (request, _response, next) {
        if (request.session.loggedIn) {
            User.findOne({ _id: request.session.loggedIn }, function(error, _document) {
                if (error) return next(error)
                next()
            })
        }
        next()
    })

    app.set('view engine', 'jade');
    app.set('views', `${__dirname}/views`)
    app.set('view options', { layout: false })

    app.get('/', function(request, response) {
        response.render('index', { authenticated: request.session.loggedIn, me: request.session.me })
    })

    app.get('/login', function(_request, response) {
        response.render('login', {})
    })

    app.post('/login', function(request, response) {
        User.findOne({
            email: request.body.email,
            password: request.body.password
        }, function(error, document) {
            if (error) return error
            if (!document) return response.send(`<p> User not found, Go back and try and again</p>`)
            request.session.loggedIn = document._id.toString()
            request.session.me = document
            response.redirect("/")
        })
    })

    app.get('/login/:signupEmail', function(request, response) {
        response.render('login', { signupEmail: request.params.signupEmail })
    })

    app.get('/signup', function(_request, response, next) {
        response.render('signup', {})
    })

    app.get('/logout', function(request, response, next) {
        request.session.loggedIn = null
        request.session.me = null
        response.redirect("/")
    })

    app.post('/signup', function(request, response, next) {
        User.insertOne({
            first: request.body.first,
            last: request.body.last,
            email: request.body.email,
            password: request.body.password,
        }, function (error, document) {
            if (error) return next(error)
            response.redirect(`/login/${document.ops[0].email}`)
        })
    })

    const server = http.createServer(app)
    server.listen(4000, () => console.log('Connected to Port: 4000'))
}

main().catch((error) => console.error(error))