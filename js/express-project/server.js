const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const members = require('./backend/members')

const PORT = process.env.PORT || 4000;

// Logger Middlesware
app.use(require('./backend/middleware/logger'))

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Home Page Route
app.get('/', (request, response) => response.render('index', {
    title: "Members App",
    members
}));

/* Static Folder */
app.use(express.static(path.join(__dirname, 'public')));

// Api Routes
app.use('/api/v1/members', require('./backend/routes/api/members'));

/* Listen to port */
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
