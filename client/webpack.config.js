const path = require('path');

module.exports = {
    entry: "./js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve('../server/template/', 'static'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                include: path.resolve(__dirname, 'js'),
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
                include: path.resolve(__dirname, 'css'),
            },
            {
                loader: 'file-loader',
                test: /\.(png|jpg|jpeg|gif)$/,
                include: path.resolve(__dirname, 'img'),
            }
        ]
    }
}
