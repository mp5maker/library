const path = require('path');

module.exports = async ({ config, mode }) => {
    const BASE_PATH = path.join(__dirname, '..');

    config.resolve = {
        extensions: [".ts", ".tsx", ".js", ".json"]
    }

    config.module.rules = [
        {
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
            include: path.resolve(BASE_PATH, 'src')
        },
        {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader",
            include: path.resolve(BASE_PATH, 'src')
        },
        {
            test: /\.scss/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader'
                }
            ],
            include: path.resolve(BASE_PATH, 'src')
        }
    ]

    return config;
};