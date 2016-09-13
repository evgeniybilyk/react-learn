var webpack = require("webpack");
var path = require("path");
var ip = require("ip");

module.exports = {
    context: __dirname + "/app",
    entry: {
        home: "./home",
        about: "./about",
        main: "./main",
        common: "./common"
    },

    output: {
        path: __dirname + "/public",
        filename: "[name].js",
        library: "[name]",
        sourceMapFilename: "debugging/[file].map"
    },

    /** Start: Настройки для поиска модулей*/
    resolve: {
        modulesDirectories: ["node_modules"],
        extensions: ["", ".js"]
    },

    resolveLoader: {
        modulesDirectories: ["node_modules"],
        moduleTemplates: ["*-loader"],
        extensions: ["", ".js"]
    },
    /** End */

    devtool: "source-map",

    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        })
    ],

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
