var webpack = require("webpack");
var path = require("path");
var ip = require("ip");

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },

    devtool: "source-map",

    watchOptions: {
        aggregateTimeout: 100
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    devServer: {
        outputPath: path.resolve(__dirname, "public"),
        host: ip.address(),
        port: 3001,
        contentBase: path.resolve(__dirname, "public"),
        colors: true,
        historyApiFallback: true,
        inline: true
    }
};
