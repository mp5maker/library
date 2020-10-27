const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    mode: isProduction ? "production" : "development",
    entry: {
        index: path.join(__dirname, "src/index.tsx"),
    },
    ...(isProduction
        ? {}
        : {
            devServer: {
                port: 8080,
                open: true,
                hot: true,
                contentBase: path.join(__dirname, 'static'),
            },
        }),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "awesome-typescript-loader",
                },
            },
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/env",
                            "@babel/react",
                            "@babel/typescript",
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "src/index.html"),
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        }),
        ...(isProduction ?
            [
                new CopyWebpackPlugin([
                    { from: 'static/images', to: 'dist/images' },
                    { from: 'static/icon', to: 'dist/icon' },
                    { from: 'static/manifest.json', to: 'dist' }
                ])
            ]
        : [])
    ],
};
