require('dotenv').config()
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
})

const app = express()


/* SETTINGS */
app.set('view engine', 'jade')
app.set('views', `${__dirname}/views`)
app.set('view options', { layout: false })

/* MIDDLEWARES */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', function(_request, response, next) {
    db.query(`
        SELECT id, title, description from item
    `, function (error, results) {
        if (error) return next(error)
        response.render('index', { items: results })
    })
})

app.post('/create', function(request, response, next) {
    db.query(`
        INSERT INTO item SET title = ?, description = ?
    `, [request.body.title, request.body.description], function(error, info) {
        if (error) return next(error)
        console.log(` - item created with id %s`, info.insertId)
        response.redirect('/')
    })
})

app.get('/item/:id', function(request, response, next) {
    function getItem(callback) {
        db.query(`
            SELECT id, title, description FROM item WHERE id = ? LIMIT 1
        `, [request.params.id], function(error, results) {
            if (error) return next(error)
            if (!results[0]) return response.send(404)
            callback(results[0])
        })
    }

    function getReviews(item_id, callback) {
        db.query(`
            SELECT text, stars FROM review WHERE item_id = ?
        `, [item_id], function (error, results) {
            if (error) return next(error)
            callback(results)
        })
    }

    getItem(function(item) {
        getReviews(item.id, function(reviews) {
            response.render('item', { item, reviews })
        })
    })
})

app.post('/item/:id/review', function(request, response, next) {
    db.query(`
        INSERT INTO review set item_id = ?, stars = ?, text = ?
    `, [request.params.id, request.body.stars, request.body.text], function(error, info) {
        if (error) return next(error)
        console.log(' - review create with id %s', info.insertId)
        response.redirect(`/item/${request.params.id}`)
    })
})


const server = http.createServer(app)
server.listen(4000, () => console.log('Connected to 4000'))