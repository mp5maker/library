const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'static')))
app.use(express.static(path.join(__dirname, '.')))

app.get('/', (_request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/about', (_request, response) => {
    response.sendFile(path.join(__dirname, 'pages/about.html'));
})

app.get('/contact', (_request, response) => {
    response.sendFile(path.join(__dirname, 'pages/contact.html'));
})

app.get('/offline', (_request, response) => {
    response.sendFile(path.join(__dirname, 'pages/fallback.html'));
})

app.listen(port, () => console.log(`Listening to the port: ${port}`))