var path = require('path');
var config = {
    entry: "/js/app.js";
    output: {
        path: __dirname + '/',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }]
    }
};

module.exports = config;
