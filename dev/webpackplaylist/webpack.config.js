const path = require('path');

module.exports = {
    // Define Entry Points
    entry: './src/main.js',

    // Define Output Points
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    // Modules
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
            
        ]
    }
}