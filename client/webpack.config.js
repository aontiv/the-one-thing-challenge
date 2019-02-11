const path = require('path');

module.exports = {
    entry: "./js/index.js",
    output: {
        filename: "bundle.js",
        publicPath: '/static/',
        path: path.resolve('../server/templates/', 'static'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                include: path.resolve(__dirname, 'js'),
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, 'scss'),
            },
            {
                loader: 'file-loader',
                test: /\.(png|jpg|jpeg|gif)$/,
                include: path.resolve(__dirname, 'img'),
            }
        ]
    }
}
