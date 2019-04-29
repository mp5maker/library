const express = require('express');
const path = require('path');
const app = express();

const members = require('./backend/members')
const PORT = process.env.PORT || 4000;

// Logger Middlesware
app.use(require('./backend/logger'))

// Body Parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Api Routes
app.use('/api/v1/members', require('./backend/routes/api/members'));

/* Static Folder */
app.use(express.static(path.join(__dirname, 'public')));

/* Listen to port */
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
