const express = require('express')
const https = require('https')
const http = require('http')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const connectRedis = require('connect-redis')
const bodyParser = require('body-parser')
const Redis = require('ioredis')

const app = express()
const RedisStore = connectRedis(session)
const redis = new Redis()

const users = [{ id: 1, username: 'test', password: '123' }]

/* SET */
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views`)
app.set('view options', { layout: false })
app.set('trust proxy', 1)

/* MIDDLEWARES */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(session({
    name: `pro-mono`,
    store: new RedisStore({
        client: redis,
        disableTouch: true,
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
    },
    secret: `open-secret`,
    saveUninitialized: false,
    resave: false
}))

/* AUTHENTICATION */
function isAuthorized(request, response, next) {
    if (request.session.user) next()
    else response.redirect('/login')
}


/* STATIC */
app.use(express.static(`${__dirname}/public`))

/* ROUTES */
app.get('/', isAuthorized, function(_request, response) {
    const onSuccess = (onSuccessResponse) => {
        let body = '';
        onSuccessResponse.setEncoding('utf-8')
        onSuccessResponse.on('data', (chunk) => body += chunk)
        onSuccessResponse.on('end', function (_results) {
            response.render('index', { results: JSON.parse(body) })
        })
    }

    https.get(`https://heroku-fake-rest-api.herokuapp.com/posts/`, {}, onSuccess).end()
})

/* ROUTES WITH PARAMS */
app.get('/details/:id', isAuthorized, function(request, response) {
    const id = request.params.id
    const onSuccess = (onSuccessResponse) => {
        let body = '';
        onSuccessResponse.setEncoding('utf-8')
        onSuccessResponse.on('data', (chunk) => body += chunk)
        onSuccessResponse.on('end', function (_results) {
            response.render('details', { user: JSON.parse(body) })
        })
    }

    https.get(`https://heroku-fake-rest-api.herokuapp.com/posts/${id}`, {}, onSuccess).end()
})

/* LOGIN */
app.get('/login', function (_request, response) {
    response.render('login')
})

/* LOGIN WITH BODY */
app.post('/login', function(request, response) {
    const username = request.body.username
    const password = request.body.password
    if (username && password) {
        const findUser = users.find((item) => item.username == username && item.password == password)
        if (findUser) {
            request.session.user = findUser
            response.redirect('/')
        }
    }
})

/* LISTEN */
http.createServer(app).listen(3000)
https.createServer(app).listen(3001)