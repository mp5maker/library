const path = require('path');

module.exports = {
    // Define Entry Points
    entry: './src/main.js',

    // Define Output Points
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }
}