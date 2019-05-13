const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        publicPath: '/static/js/',
        path: path.resolve(__dirname, "../", "server", "dist", "static", "js"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                include: [ path.resolve(__dirname, "src", "js") ],
                exclude: [ path.resolve(__dirname, "src", "node_modules") ]
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ],
                include: [ path.resolve(__dirname, "src", "scss") ],
                exclude: [ path.resolve(__dirname, "src", "node_modules") ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                include: [ path.resolve(__dirname, "src", "img") ],
                exclude: [ path.resolve(__dirname, "src", "node_modules") ],
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "../media"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [ new HtmlWebpackPlugin({
        template: "src/index.html",
        filename: "../../index.html"
    }) ]
};
