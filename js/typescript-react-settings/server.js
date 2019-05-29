const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (request, response) => {
    return response.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
