const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'static')))
app.use(express.static(path.join(__dirname, '.')))

app.get('/', (_request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(port, () => console.log(`Listening to the port: ${port}`))